import axios from "axios"
import { Config } from "./config"
import { CnpjCache } from "./CnpjCache"
import { formatCnpj } from "./cnpj"
import { normalizeCnaeCode, segmentFromCnae } from "./segment"
import { cleanText } from "./text"
import type { CnaeInfo, Segment } from "./types"

interface CnpjResponse {
    nome_fantasia?: string | null
    razao_social?: string | null
    cnae_fiscal?: number | string | null
    cnae_fiscal_descricao?: string | null
}

/** O que a consulta de CNPJ acrescenta. Todos os campos podem ser `null` individualmente. */
export interface CnpjInfo {
    TradeName: string | null
    Company: string | null
    Cnae: CnaeInfo | null
    Segment: Segment | null
}

/**
 * Busca o cadastro de um CNPJ nos dados abertos da Receita Federal.
 *
 * Três regras de projeto, todas deliberadas:
 *
 * - **nunca lança e nunca invalida a nota.** Falha aqui devolve `null` e a nota segue com a razão
 *   social impressa e sem ramo. Cadastro é enriquecimento, não dado fiscal: derrubar uma consulta
 *   de nota porque um serviço de terceiro está fora do ar seria trocar o essencial pelo acessório;
 * - **uma requisição serve todos os campos.** Nome fantasia, razão social e CNAE vêm da mesma
 *   resposta, então o ramo do estabelecimento não custa nenhuma requisição nova;
 * - **dois níveis de cache.** Em memória, para o lote; em disco, para que `scan` e `full` — que
 *   são processos distintos — não consultem o mesmo CNPJ duas vezes.
 */
export class CnpjClient {

    private readonly memory = new Map<string, CnpjInfo | null>()

    public constructor(private readonly cache: CnpjCache = new CnpjCache()) { }

    public async info(cnpj: string): Promise<CnpjInfo | null> {
        if (!Config.CnpjLookupEnabled) {
            return null
        }

        const inMemory = this.memory.get(cnpj)

        if (inMemory !== undefined) {
            return inMemory
        }

        const cached = this.cache.get(cnpj)

        if (cached !== undefined) {
            this.memory.set(cnpj, cached)
            return cached
        }

        const info = await this.lookup(cnpj)

        this.memory.set(cnpj, info)

        // Só sucesso é persistido. Gravar a falha transformaria um 503 momentâneo em ramo ausente
        // pelo prazo inteiro do cache.
        if (info) {
            this.cache.set(cnpj, info)
        }

        return info
    }

    private async lookup(cnpj: string): Promise<CnpjInfo | null> {
        try {
            return await this.get(cnpj)
        } catch (error) {
            if (!this.isRetriable(error)) {
                return this.giveUp(cnpj, error)
            }

            try {
                return await this.get(cnpj)
            } catch (retryError) {
                return this.giveUp(cnpj, retryError)
            }
        }
    }

    private async get(cnpj: string): Promise<CnpjInfo> {
        const { data } = await axios.get<CnpjResponse>(`${Config.CnpjApiUrl}${cnpj}`, {
            timeout: Config.TimeoutMs,
        })

        const code = normalizeCnaeCode(data.cnae_fiscal)
        const description = cleanText(data.cnae_fiscal_descricao ?? "")

        return {
            // Cadastro sem nome fantasia é comum, sobretudo em LTDA: a Receita devolve o campo
            // vazio. `null` significa "consultado e não existe", não "não consultei".
            TradeName: textOrNull(data.nome_fantasia),
            Company: textOrNull(data.razao_social),
            // Sem código não há CNAE, mesmo que venha descrição: o código é o que a tabela de
            // ramos consulta, e uma descrição solta não é verificável.
            Cnae: code ? { Code: code, Description: description } : null,
            Segment: segmentFromCnae(code),
        }
    }

    /** Só 5xx e falha de rede valem segunda tentativa; 404 e 400 são respostas definitivas. */
    private isRetriable(error: unknown): boolean {
        if (!axios.isAxiosError(error)) {
            return false
        }

        const status = error.response?.status

        return status === undefined || status >= 500
    }

    private giveUp(cnpj: string, error: unknown): null {
        const status = axios.isAxiosError(error) ? error.response?.status : undefined

        // 404 é cadastro ausente, não problema: não vale ruído no stderr.
        if (status !== 404) {
            const motivo = status ?? (error instanceof Error ? error.message : String(error))
            process.stderr.write(`  aviso: cadastro de ${formatCnpj(cnpj)} indisponível (${motivo})\n`)
        }

        return null
    }
}

function textOrNull(raw: string | null | undefined): string | null {
    const text = cleanText(raw ?? "")

    return text === "" ? null : text
}
