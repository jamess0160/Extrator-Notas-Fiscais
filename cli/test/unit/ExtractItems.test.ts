import { parseFromString } from "dom-parser"
import { ExtractItems } from "../../src/ExtractNfeData/ExtractItems"
import { KEYS, VALID_KEYS, readFixture } from "../helpers/fixtures"
import type { NfeItem } from "../../src/types"

const extractor = new ExtractItems()

const itemsOf = (danfe: string): NfeItem[] => extractor.run(parseFromString(readFixture(danfe)))

describe("ExtractItems", () => {

    it("extrai todos os itens da nota", () => {
        expect(itemsOf(KEYS.farmacia)).toHaveLength(1)
        expect(itemsOf(KEYS.alimentos3)).toHaveLength(3)
        expect(itemsOf(KEYS.mercado5)).toHaveLength(5)
        expect(itemsOf(KEYS.alimentos15)).toHaveLength(15)
        expect(itemsOf(KEYS.mercado22)).toHaveLength(22)
    })

    it("mapeia cada campo na coluna certa", () => {
        expect(itemsOf(KEYS.farmacia)[0]).toEqual<NfeItem>({
            Description: "DIPIRONA 1G 20CP GEN PRATI",
            Quantity: 1,
            UN: "UN",
            UnityValue: 23.21,
            TotalValue: 23.21,
        })
    })

    it("converte quantidade fracionária de item vendido por peso", () => {
        const carne = itemsOf(KEYS.mercado22)
            .find((item) => item.Description.startsWith("CARNE RESF BOV"))

        expect(carne).toBeDefined()
        expect(carne?.UN).toBe("KG")
        expect(carne?.Quantity).toBeCloseTo(0.568, 3)
        expect(carne?.UnityValue).toBe(64.9)
    })

    /**
     * A verificação que pega troca de ordem de colunas na página do SEFAZ. Sem ela, uma mudança no
     * HTML passa como sucesso com números trocados de lugar.
     *
     * A tolerância cobre o arredondamento de centavos em item por peso — o maior desvio observado
     * nas fixtures é de R$ 0,0032, em `0,568 KG × 64,90`.
     */
    it.each(VALID_KEYS)("mantém Quantity × UnityValue ≈ TotalValue em %s", (danfe) => {
        const items = itemsOf(danfe)

        expect(items.length).toBeGreaterThan(0)

        for (const item of items) {
            expect(item.Quantity * item.UnityValue).toBeCloseTo(item.TotalValue, 1)
            expect(Math.abs(item.Quantity * item.UnityValue - item.TotalValue)).toBeLessThan(0.02)
        }
    })

    it.each(VALID_KEYS)("não deixa campo vazio ou NaN em %s", (danfe) => {
        for (const item of itemsOf(danfe)) {
            expect(item.Description).not.toBe("")
            expect(item.UN).not.toBe("")
            expect(Number.isFinite(item.Quantity)).toBe(true)
            expect(Number.isFinite(item.UnityValue)).toBe(true)
            expect(Number.isFinite(item.TotalValue)).toBe(true)
            expect(item.TotalValue).toBeGreaterThan(0)
        }
    })

    /**
     * Regressão do bug de CRLF: o id era lido por um regex terminado em curinga e, como o
     * ponto do JavaScript não casa carriage return, o id saía com o CR colado e o
     * `getElementById` não achava o item — toda nota válida virava `PARSE_ERROR`.
     */
    it("lê o id do item mesmo com quebra de linha CRLF", () => {
        expect(readFixture(KEYS.farmacia)).toContain("\r\n")
        expect(itemsOf(KEYS.farmacia)).toHaveLength(1)
    })
})
