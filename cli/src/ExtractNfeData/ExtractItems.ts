import { Dom, Node, parseFromString } from "dom-parser"
import { parsePtBrNumber } from "../number"
import { cleanText } from "../text"
import type { NfeItem } from "../types"

export class ExtractItems {
    public run(dom: Dom): NfeItem[] {

        let lines = dom.rawHTML.split("\n")

        let itemsLines = lines.filter((item) => {
            return /Item \+ .*/.test(item)
        })

        // O id é lido com `[^"]+` em vez de `.*`: as fixtures (e a página do SEFAZ) usam CRLF, e
        // em JavaScript o `.` não casa carriage return — então o `/.*id="(.*)".*/` anterior deixava
        // o CR colado no id capturado, e o `getElementById` seguinte nunca encontrava o item.
        let ids = itemsLines.map((item) => {
            let id = /id="([^"]+)"/.exec(item)?.[1]

            if (!id) {
                throw new Error(`Linha de item sem atributo id: ${item.trim()}`)
            }

            return id
        })

        return ids.map((id) => {
            let domItem = dom.getElementById(id)

            if (!domItem) {
                throw new Error(`Item com id ${id} não encontrado`)
            }

            return this.extractItemData(domItem)
        })
    }

    /**
     * As células são mapeadas por **índice posicional** (1=Descrição, 2=Qtde, 3=Un, 4=Vl Unit,
     * 5=Vl Total; 0 é o código do produto). Mudança na ordem das colunas da página do SEFAZ quebra
     * isso silenciosamente.
     */
    private extractItemData(htmlItem: Node) {
        let itemDom = parseFromString(htmlItem.innerHTML)

        let nodes = itemDom.getElementsByTagName("td")

        return nodes.reduce<NfeItem>((old, item, index) => {

            let value = item.innerHTML

            if (index === 1) {
                old.Description = cleanText(value)
            }

            if (index === 2) {
                old.Quantity = parsePtBrNumber(value)
            }

            if (index === 3) {
                old.UN = cleanText(value)
            }

            if (index === 4) {
                old.UnityValue = parsePtBrNumber(value)
            }

            if (index === 5) {
                old.TotalValue = parsePtBrNumber(value)
            }

            return old
        }, {
            Description: "",
            Quantity: 0,
            UN: "",
            UnityValue: 0,
            TotalValue: 0,
        })
    }
}
