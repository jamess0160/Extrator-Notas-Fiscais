import { Dom, parseFromString } from "dom-parser";
import { parsePtBrNumber } from "../number";

export class GetDanfeValue {

    public run(dom: Dom): number {

        let lines = dom.rawHTML.split("\n")

        let valueLine = lines.findIndex((item) => {
            return item.includes("FORMA PAGAMENTO")
        })

        let parentLineIndex = this.getParentLineIndex(lines, valueLine)
        let closeParentLineIndex = this.getCloseParentLineIndex(lines, parentLineIndex)

        let valueLines = lines.slice(parentLineIndex, closeParentLineIndex)

        let valueDom = parseFromString(valueLines.join("\n"))

        let childs = valueDom.getElementsByTagName("tr")

        let paymentIndex = childs.findIndex((item) => {
            return item.innerHTML.includes("FORMA PAGAMENTO")
        })

        let paymentChilds = childs.slice(paymentIndex + 1, childs.length)

        // O total vem da **soma das linhas de pagamento**, não de um campo "total" da página:
        // uma nota com cartão + dinheiro tem o valor repartido entre as linhas.
        return paymentChilds.reduce((old, item) => {

            let nodes = item.getElementsByTagName("td")
            let valueNode = nodes[1]

            if (!valueNode) {
                throw new Error("Linha de pagamento sem coluna de valor")
            }

            return old + parsePtBrNumber(valueNode.innerHTML)
        }, 0)
    }

    private getParentLineIndex(lines: string[], lineIndex: number) {
        for (let i = lineIndex; i > 0; i--) {
            let line = lines[i];

            if (line.includes("<table")) {
                return i
            }
        }

        throw new Error("Linha pai não encontrada!")
    }

    private getCloseParentLineIndex(lines: string[], lineIndex: number) {
        for (let i = lineIndex; i < lines.length; i++) {
            let line = lines[i];

            if (line.includes("</table")) {
                return i
            }
        }

        throw new Error("Fechamento da linha pai não encontrada!")
    }
}