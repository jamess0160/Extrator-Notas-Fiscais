import { Dom } from "dom-parser"
import { normalizeCnpj } from "../cnpj"

/**
 * O CNPJ aparece no cabeçalho junto da inscrição estadual, como
 * `CNPJ: 88.212.113/0254-39      Inscrição Estadual: 0290546800`. O recorte para antes da inscrição
 * evita capturar os dígitos dela quando a pontuação do CNPJ faltar.
 */
const CNPJ_NO_CABECALHO = /CNPJ:\s*([\d.\/-]{14,20})/

export class GetDanfeCnpj {

    /**
     * Devolve o CNPJ do emitente com 14 dígitos, ou `undefined` quando não está na página.
     *
     * Ausência **não** é erro: quem chama cai na derivação a partir da chave de acesso
     * (`cnpjFromDanfe`), então uma mudança no cabeçalho do SEFAZ não transforma a nota em
     * `PARSE_ERROR` por causa desse campo.
     */
    public run(dom: Dom): string | undefined {
        const match = CNPJ_NO_CABECALHO.exec(dom.rawHTML)

        return match?.[1] ? normalizeCnpj(match[1]) : undefined
    }
}
