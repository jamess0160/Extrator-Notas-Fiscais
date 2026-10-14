import axios, { AxiosError } from "axios"
import { Config } from "./config"
import { decodeHtml } from "./decode"

/** Falha de transporte: rede, timeout ou HTTP não-2xx. Vira `FETCH_ERROR` no contrato. */
export class SefazFetchError extends Error {
    public constructor(message: string, public readonly cause?: unknown) {
        super(message)
        this.name = "SefazFetchError"
    }
}

export class SefazClient {

    /** Busca a página de consulta da chave. Só transporte: não valida nem interpreta o HTML. */
    public async fetchPage(danfe: string): Promise<string> {
        try {
            return await this.post(danfe)
        } catch (error) {
            if (!this.isRetriable(error)) {
                throw new SefazFetchError(this.describe(error), error)
            }

            process.stderr.write(`  aviso: falha ao consultar ${danfe}, tentando novamente\n`)

            try {
                return await this.post(danfe)
            } catch (retryError) {
                throw new SefazFetchError(this.describe(retryError), retryError)
            }
        }
    }

    private async post(danfe: string): Promise<string> {
        const formData = new URLSearchParams({
            HML: "false",
            chaveNFe: danfe,
        })

        // `arraybuffer` em vez da string pronta do axios: a decodificação é decidida a partir dos
        // bytes (ver decode.ts), não do charset declarado pela página.
        const { data } = await axios.post<ArrayBuffer>(Config.SefazUrl, formData, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            responseType: "arraybuffer",
            timeout: Config.TimeoutMs,
        })

        return decodeHtml(Buffer.from(data))
    }

    /**
     * Retry apenas no que pode ser transitório: sem resposta (rede, timeout) ou 5xx. Um 4xx é
     * resposta definitiva do servidor e repetir só dobra o custo.
     *
     * Nota fiscal inexistente **não** passa por aqui: o SEFAZ responde 200 com uma página normal
     * (ver docs/etapa-2-cli.md), então nunca chega a virar erro de transporte.
     */
    private isRetriable(error: unknown): boolean {
        if (!axios.isAxiosError(error)) {
            return false
        }

        const status = error.response?.status

        return status === undefined || status >= 500
    }

    private describe(error: unknown): string {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError
            const status = axiosError.response?.status

            return status ? `HTTP ${status}` : axiosError.code || axiosError.message
        }

        return error instanceof Error ? error.message : String(error)
    }
}
