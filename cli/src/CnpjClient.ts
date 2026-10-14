import axios from "axios"
import { Config } from "./config"
import { formatCnpj } from "./cnpj"
import { cleanText } from "./text"

interface CnpjResponse {
    nome_fantasia?: string | null
}

/**
 * Busca o nome fantasia de um CNPJ nos dados abertos da Receita Federal.
 *
 * Duas regras de projeto, as duas deliberadas:
 *
 * - **nunca lança e nunca invalida a nota.** Falha aqui devolve `null` e a nota segue com a razão
 *   social. O nome fantasia é enfeite útil, não dado fiscal: derrubar uma consulta de nota porque
 *   um serviço de terceiro está fora do ar seria trocar o essencial pelo acessório;
 * - **cache por instância**, que na prática é por lote. Notas do mesmo estabelecimento são comuns
 *   (duas das fixtures do repositório compartilham CNPJ), e o serviço é público e com limite de
 *   requisições: repetir a mesma consulta é gastar cota à toa.
 */
export class CnpjClient {

    private readonly cache = new Map<string, string | null>()

    public async tradeName(cnpj: string): Promise<string | null> {
        if (!Config.CnpjLookupEnabled) {
            return null
        }

        const cached = this.cache.get(cnpj)

        if (cached !== undefined) {
            return cached
        }

        const tradeName = await this.lookup(cnpj)

        this.cache.set(cnpj, tradeName)

        return tradeName
    }

    private async lookup(cnpj: string): Promise<string | null> {
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

    private async get(cnpj: string): Promise<string | null> {
        const { data } = await axios.get<CnpjResponse>(`${Config.CnpjApiUrl}${cnpj}`, {
            timeout: Config.TimeoutMs,
        })

        const fantasia = cleanText(data.nome_fantasia ?? "")

        // Cadastro sem nome fantasia é comum, sobretudo em LTDA: a Receita devolve o campo vazio.
        // `null` significa "consultado e não existe", não "não consultei".
        return fantasia === "" ? null : fantasia
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
            process.stderr.write(`  aviso: nome fantasia de ${formatCnpj(cnpj)} indisponível (${motivo})\n`)
        }

        return null
    }
}
