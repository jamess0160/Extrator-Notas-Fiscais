import fs from "node:fs"
import path from "node:path"
import { Config } from "./config"
import type { CnpjInfo } from "./CnpjClient"

interface CacheEntry {
    FetchedAt: number
    Info: CnpjInfo
}

interface CacheFile {
    Version: number
    Entries: Record<string, CacheEntry>
}

const VERSION = 1

/**
 * Cache em disco das consultas de CNPJ, compartilhado entre invocações da CLI.
 *
 * **Por que em disco.** O cache do `CnpjClient` é por instância, logo morre com o processo. Como
 * `scan` e `full` são invocações separadas — é essa separação que permite ao usuário decidir no
 * meio do caminho —, sem persistência cada CNPJ seria consultado duas vezes num fluxo só.
 *
 * **O que entra, e o que não entra.** Só dado público de cadastro, indexado por CNPJ: nome
 * fantasia, razão social e CNAE. Nunca a chave DANFE, nunca valor, nunca item. As chaves são as
 * compras de uma pessoa física, vinculadas ao CPF dela; o cadastro de um CNPJ é informação aberta
 * da Receita Federal. A distinção é o que mantém o arquivo inofensivo se alguém o ler.
 *
 * Só sucesso é gravado. Uma falha de consulta é tipicamente transitória (o provedor devolve 503
 * para alguns CNPJs), e persistir isso transformaria uma indisponibilidade momentânea em ramo
 * ausente por 30 dias.
 *
 * Nenhuma falha de I/O aqui pode quebrar a CLI: tudo que esta classe faz é opcional por
 * construção, e qualquer erro degrada para "sem cache".
 */
export class CnpjCache {

    private entries: Record<string, CacheEntry> | undefined
    private warned = false

    public get(cnpj: string): CnpjInfo | undefined {
        if (!Config.CnpjCacheEnabled) {
            return undefined
        }

        const entry = this.load()[cnpj]

        if (!entry) {
            return undefined
        }

        // Entrada vencida é tratada como ausente, e não removida: a próxima gravação a sobrescreve
        // de qualquer forma, e reescrever o arquivo durante uma leitura seria efeito colateral
        // inesperado num `get`.
        if (Date.now() - entry.FetchedAt > Config.CnpjCacheTtlMs) {
            return undefined
        }

        return entry.Info
    }

    public set(cnpj: string, info: CnpjInfo): void {
        if (!Config.CnpjCacheEnabled) {
            return
        }

        const entries = this.load()

        entries[cnpj] = { FetchedAt: Date.now(), Info: info }

        this.save(entries)
    }

    private load(): Record<string, CacheEntry> {
        if (this.entries) {
            return this.entries
        }

        this.entries = {}

        try {
            const raw = fs.readFileSync(Config.CnpjCachePath, "utf8")
            const parsed = JSON.parse(raw) as CacheFile

            // Arquivo de versão desconhecida é descartado em silêncio, não migrado: o custo de
            // perder o cache é uma consulta a mais, e o de interpretar um formato errado é dado
            // inventado.
            if (parsed?.Version === VERSION && parsed.Entries) {
                this.entries = parsed.Entries
            }
        } catch (error) {
            // Arquivo inexistente é o caso normal da primeira execução, não um problema.
            if ((error as NodeJS.ErrnoException)?.code !== "ENOENT") {
                this.warn(error)
            }
        }

        return this.entries
    }

    private save(entries: Record<string, CacheEntry>): void {
        const file: CacheFile = { Version: VERSION, Entries: entries }
        const target = Config.CnpjCachePath
        const temporary = `${target}.tmp`

        try {
            fs.mkdirSync(path.dirname(target), { recursive: true })

            // Escreve e renomeia: duas CLIs rodando ao mesmo tempo não deixam um JSON truncado
            // para a terceira ler.
            fs.writeFileSync(temporary, JSON.stringify(file), "utf8")
            fs.renameSync(temporary, target)
        } catch (error) {
            this.warn(error)
        }
    }

    /** Um aviso por processo: um por CNPJ transformaria disco cheio em enxurrada no stderr. */
    private warn(error: unknown): void {
        if (this.warned) {
            return
        }

        this.warned = true

        const detail = error instanceof Error ? error.message : String(error)

        process.stderr.write(`  aviso: cache de CNPJ indisponível (${detail}); seguindo sem cache\n`)
    }
}
