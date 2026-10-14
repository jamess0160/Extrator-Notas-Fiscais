import { cnpjFromDanfe, periodFromDanfe } from "./cnpj"
import { CnpjClient } from "./CnpjClient"
import { Config } from "./config"
import { failure } from "./errors"
import { validateDanfe } from "./schema"
import type { ScanGroup, ScanItem, ScanResult, ScanSuccess, Segment } from "./types"

/**
 * O comando `scan`: identifica o ramo de cada nota **sem consultar o SEFAZ**.
 *
 * O que torna isso possível é o layout da chave de acesso: os dígitos 7 a 20 são o CNPJ do
 * emitente (ver [cnpj.ts](cnpj.ts)). Então o ramo depende apenas da consulta de cadastro, que é
 * por CNPJ e não por nota — 20 notas de 6 estabelecimentos custam 6 requisições, não 20.
 *
 * Consequência de contrato que vale registrar: como nada aqui fala com o SEFAZ, o `scan` **nunca**
 * produz `NOT_FOUND`, `FETCH_ERROR` nem `PARSE_ERROR`. Os únicos erros possíveis são os três de
 * validação de chave, todos offline. Em troca, ele também não sabe se a nota existe na base — isso
 * só o `full` descobre.
 */
export class ScanRunner {

    public constructor(private readonly cnpjClient: CnpjClient = new CnpjClient()) { }

    public async run(danfes: string[]): Promise<ScanResult> {
        const unique = [...new Set(danfes)]

        if (unique.length < danfes.length) {
            process.stderr.write(`${danfes.length - unique.length} chave(s) duplicada(s) ignorada(s)\n`)
        }

        const items: ScanItem[] = new Array(unique.length)
        const pending = new Map<string, number[]>()

        // Primeira passada, inteiramente offline: valida e agrupa as posições por CNPJ. É o
        // agrupamento que faz a consulta ser por estabelecimento em vez de por nota.
        unique.forEach((danfe, index) => {
            const formatError = validateDanfe(danfe)

            if (formatError) {
                items[index] = failure(danfe, formatError)
                return
            }

            const cnpj = cnpjFromDanfe(danfe) ?? ""

            items[index] = {
                Danfe: danfe,
                Valid: true,
                Cnpj: cnpj,
                Company: null,
                TradeName: null,
                Cnae: null,
                Segment: null,
                Period: periodFromDanfe(danfe) ?? null,
            }

            const positions = pending.get(cnpj)

            if (positions) {
                positions.push(index)
            } else {
                pending.set(cnpj, [index])
            }
        })

        await this.enrich(pending, items)

        return this.envelope(items)
    }

    /** Consulta cada CNPJ distinto uma vez, com a mesma concorrência do lote de notas. */
    private async enrich(pending: Map<string, number[]>, items: ScanItem[]): Promise<void> {
        const cnpjs = [...pending.keys()]
        let nextIndex = 0

        const worker = async (): Promise<void> => {
            while (true) {
                const index = nextIndex++

                if (index >= cnpjs.length) {
                    return
                }

                const cnpj = cnpjs[index] as string

                process.stderr.write(`[${index + 1}/${cnpjs.length}] cadastro de ${cnpj}\n`)

                const info = await this.cnpjClient.info(cnpj)

                if (!info) {
                    continue
                }

                for (const position of pending.get(cnpj) ?? []) {
                    const item = items[position] as ScanSuccess

                    item.Company = info.Company
                    item.TradeName = info.TradeName
                    item.Cnae = info.Cnae
                    item.Segment = info.Segment
                }
            }
        }

        const workers = Math.min(Config.Concurrency, cnpjs.length)

        await Promise.all(Array.from({ length: workers }, worker))
    }

    private envelope(items: ScanItem[]): ScanResult {
        const valid = items.filter((item): item is ScanSuccess => item.Valid)
        const resolved = valid.filter((item) => item.Segment !== null).length

        return {
            Total: items.length,
            Success: valid.length,
            Failed: items.length - valid.length,
            Resolved: resolved,
            Unresolved: valid.length - resolved,
            Segments: this.group(valid),
            Results: items,
        }
    }

    /**
     * Agrupa por ramo. `Danfes` leva as chaves do grupo porque é exatamente o argumento que o
     * `full` vai receber depois do filtro — sem isso, quem consome teria que reconstruir o
     * agrupamento para usá-lo.
     */
    private group(valid: ScanSuccess[]): ScanGroup[] {
        const groups = new Map<Segment | "", { segment: Segment | null, cnpjs: Set<string>, danfes: string[] }>()

        for (const item of valid) {
            const key = item.Segment ?? ""
            const group = groups.get(key) ?? { segment: item.Segment, cnpjs: new Set<string>(), danfes: [] }

            group.cnpjs.add(item.Cnpj)
            group.danfes.push(item.Danfe)
            groups.set(key, group)
        }

        return [...groups.values()]
            .map((group) => ({
                Segment: group.segment,
                Establishments: group.cnpjs.size,
                Notes: group.danfes.length,
                Danfes: group.danfes,
            }))
            // Mais notas primeiro, porque é onde está o gasto que o usuário provavelmente quer; o
            // grupo sem ramo vai para o fim, mas continua na lista — some-lo em silêncio seria o
            // pior resultado possível num fluxo cujo propósito é decidir o que analisar.
            .sort((a, b) => {
                if ((a.Segment === null) !== (b.Segment === null)) {
                    return a.Segment === null ? 1 : -1
                }

                return b.Notes - a.Notes || String(a.Segment).localeCompare(String(b.Segment), "pt-BR")
            })
    }
}
