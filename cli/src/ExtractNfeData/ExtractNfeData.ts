import { parseFromString } from "dom-parser"
import { failure } from "../errors"
import { validateDanfe } from "../schema"
import { SefazClient, SefazFetchError } from "../SefazClient"
import type { DanfeResult } from "../types"
import { ExtractItems } from "./ExtractItems"
import { GetDanfeCompany } from "./GetDanfeCompany"
import { GetDanfeDate } from "./GetDanfeDate"
import { GetDanfeValue } from "./GetDanfeValue"

/**
 * O SEFAZ responde **200 com uma página normal** quando a nota não existe; o aviso vive dentro de
 * um `alert()` JavaScript, junto do código `M230`. Não há status HTTP para detectar, daí a busca
 * pelo sentinel no corpo. Os dois são checados porque nenhum deles é documentado oficialmente.
 */
const NOT_FOUND_SENTINELS = [
    "Documento Fiscal (NFC-e) inexistente na base de dados da SEFAZ",
    "M230 - Documento Fiscal",
]

export class ExtractNfeData {

    private readonly ExtractItems = new ExtractItems()
    private readonly GetDanfeValue = new GetDanfeValue()
    private readonly GetDanfeDate = new GetDanfeDate()
    private readonly GetDanfeCompany = new GetDanfeCompany()

    public constructor(private readonly client: SefazClient = new SefazClient()) { }

    /**
     * Consulta uma chave e devolve o item de `Results` do contrato.
     *
     * Nunca lança: toda falha vira `Valid: false` com um `Error.Code`, porque uma exceção aqui
     * abortaria o lote inteiro por causa de uma chave (D4).
     */
    public async run(danfe: string): Promise<DanfeResult> {
        // Antes de qualquer rede: chave malformada não gera requisição (garantia 5 do contrato).
        const formatError = validateDanfe(danfe)

        if (formatError) {
            return failure(danfe, formatError)
        }

        let page: string

        try {
            page = await this.client.fetchPage(danfe)
        } catch (error) {
            const detail = error instanceof SefazFetchError ? error.message : String(error)
            return failure(danfe, "FETCH_ERROR", detail)
        }

        return this.extract(danfe, page)
    }

    /**
     * Interpreta uma página já obtida. Separado de `run` para que a extração seja testável com
     * fixture, sem rede.
     */
    public extract(danfe: string, page: string): DanfeResult {
        if (NOT_FOUND_SENTINELS.some((sentinel) => page.includes(sentinel))) {
            return failure(danfe, "NOT_FOUND")
        }

        try {
            const dom = parseFromString(page)

            return {
                Danfe: danfe,
                Valid: true,
                Company: this.GetDanfeCompany.run(dom),
                Date: this.GetDanfeDate.run(dom),
                Value: this.GetDanfeValue.run(dom),
                Items: this.ExtractItems.run(dom),
            }
        } catch (error) {
            const detail = error instanceof Error ? error.message : String(error)
            return failure(danfe, "PARSE_ERROR", detail)
        }
    }
}
