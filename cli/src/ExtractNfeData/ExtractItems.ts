import { Dom, Node, parseFromString } from "dom-parser"
import { DanfeData } from "./ExtractNfeData"

export class ExtractItems {
    public run(dom: Dom): DanfeData['Items'] {

        let lines = dom.rawHTML.split("\n")

        let itemsLines = lines.filter((item) => {
            return /Item \+ .*/.test(item)
        })

        let ids = itemsLines.map((item) => {
            return item.replace(/.*id="(.*)".*/, "$1")
        })

        return ids.map((id) => {
            let domItem = dom.getElementById(id)

            if (!domItem) {
                throw new Error(`Item com id ${id} não encontrado`)
            }

            return this.extractItemData(domItem)
        })
    }

    private extractItemData(htmlItem: Node) {
        let itemDom = parseFromString(htmlItem.innerHTML)

        let nodes = itemDom.getElementsByTagName("td")

        return nodes.reduce<DanfeData['Items'][0]>((old, item, index) => {

            let value = item.innerHTML

            if (index === 1) {
                old.Description = value
            }

            if (index === 2) {
                old.Quantity = Number(value.replace(",", "."))
            }

            if (index === 3) {
                old.UN = value
            }

            if (index === 4) {
                old.UnityValue = Number(value.replace(",", "."))
            }

            if (index === 5) {
                old.TotalValue = Number(value.replace(",", "."))
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