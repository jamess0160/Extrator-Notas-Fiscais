import { Dom } from "dom-parser"
import { cleanText } from "../text"

export class GetDanfeCompany {

    /**
     * Primeiro `NFCCabecalho_SubTitulo` da página é a razão social do emitente.
     *
     * Lança quando o campo não existe, em vez de devolver `undefined` como o código anterior fazia
     * — ausência significa que a página mudou, e isso é `PARSE_ERROR`, não nota sem empresa.
     */
    public run(dom: Dom): string {
        const raw = dom.getElementsByClassName("NFCCabecalho_SubTitulo")[0]?.innerHTML
        const company = raw ? cleanText(raw) : undefined

        if (!company) {
            throw new Error("Nome da empresa não encontrado na página")
        }

        return company
    }
}
