import { Config } from "./config"
import { ExtractNfeData } from "./ExtractNfeData/ExtractNfeData"
import { failure } from "./errors"
import type { BatchResult, DanfeResult } from "./types"

export class BatchRunner {

    public constructor(private readonly extractor: ExtractNfeData = new ExtractNfeData()) { }

    /**
     * Processa as chaves com concorrência limitada e monta o envelope do contrato.
     *
     * Deduplica preservando a ordem de primeira aparição (D6) — `Set` itera na ordem de inserção,
     * e `Results` segue essa mesma ordem, independente de qual consulta terminar primeiro.
     */
    public async run(danfes: string[]): Promise<BatchResult> {
        const unique = [...new Set(danfes)]
        const results: DanfeResult[] = new Array(unique.length)

        if (unique.length < danfes.length) {
            process.stderr.write(`${danfes.length - unique.length} chave(s) duplicada(s) ignorada(s)\n`)
        }

        let nextIndex = 0

        const worker = async (): Promise<void> => {
            while (true) {
                const index = nextIndex++

                if (index >= unique.length) {
                    return
                }

                const danfe = unique[index] as string

                process.stderr.write(`[${index + 1}/${unique.length}] consultando ${danfe.slice(0, 8)}...\n`)

                results[index] = await this.safeRun(danfe)
            }
        }

        const workers = Math.min(Config.Concurrency, unique.length)

        await Promise.all(Array.from({ length: workers }, worker))

        const success = results.filter((result) => result.Valid).length

        return {
            Total: results.length,
            Success: success,
            Failed: results.length - success,
            Results: results,
        }
    }

    /**
     * Segunda rede de proteção para a D4. `ExtractNfeData.run` já promete não lançar; se essa
     * promessa for quebrada no futuro, o custo deve ser uma chave com `PARSE_ERROR`, não o lote
     * inteiro perdido.
     */
    private async safeRun(danfe: string): Promise<DanfeResult> {
        try {
            return await this.extractor.run(danfe)
        } catch (error) {
            const detail = error instanceof Error ? error.message : String(error)
            return failure(danfe, "PARSE_ERROR", detail)
        }
    }
}
