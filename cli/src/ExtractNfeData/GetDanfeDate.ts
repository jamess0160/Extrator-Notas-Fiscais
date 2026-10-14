import { Dom } from "dom-parser"

/**
 * Ancorado no literal `Data de Emissão` de propósito. A página tem duas armadilhas:
 *
 * - a data de emissão mora num `<td class="NFCCabecalho_SubTitulo">`, a *mesma* classe de onde sai
 *   o nome da empresa, então índice posicional não serve para distinguir;
 * - a página também traz `Data/Hora da Consulta`, que é o timestamp da consulta e aparece **antes**
 *   da emissão no HTML (inclusive dentro de uma string JavaScript). Um regex pela primeira data da
 *   página pega a data errada.
 *
 * O `\S{0,4}` no lugar do `ã` tolera a página chegar com o acento em outra codificação sem que a
 * extração falhe por isso.
 */
const EMISSION_DATE = /Data de Emiss\S{0,4}o:\s*(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2}):(\d{2})/

export class GetDanfeDate {

    /** Devolve a data de emissão em ISO 8601 local (`YYYY-MM-DDTHH:MM:SS`). */
    public run(dom: Dom): string {
        const match = EMISSION_DATE.exec(dom.rawHTML)

        if (!match) {
            throw new Error("Data de emissão não encontrada na página")
        }

        const [, day, month, year, hour, minute, second] = match

        // Montado por string, sem `new Date()`: a página não informa fuso, e passar por Date
        // aplicaria o fuso da máquina e deslocaria o horário impresso na nota.
        return `${year}-${month}-${day}T${hour}:${minute}:${second}`
    }
}
