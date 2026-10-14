import { parsePtBrNumber } from "../../src/number"
import { cleanText } from "../../src/text"

describe("parsePtBrNumber", () => {

    it("converte decimal com vírgula", () => {
        expect(parsePtBrNumber("19,90")).toBe(19.9)
        expect(parsePtBrNumber("0,568")).toBe(0.568)
    })

    /**
     * O caso que justifica o `replace` global: `"1.234.567,89".replace(".", "")` troca apenas a
     * primeira ocorrência e devolve `1234.567,89`, que vira `NaN` sem erro nenhum.
     */
    it("remove todos os separadores de milhar", () => {
        expect(parsePtBrNumber("1.234,56")).toBe(1234.56)
        expect(parsePtBrNumber("1.234.567,89")).toBe(1234567.89)
    })

    it("tolera espaço, indentação e &nbsp; em volta do número", () => {
        expect(parsePtBrNumber("\r\n   279,58  ")).toBe(279.58)
        expect(parsePtBrNumber("&nbsp;61,36")).toBe(61.36)
    })

    it("lança em conteúdo não numérico, em vez de devolver NaN", () => {
        expect(() => parsePtBrNumber("VALOR PAGO R$")).toThrow()
        expect(() => parsePtBrNumber("")).toThrow()
    })
})

describe("cleanText", () => {

    it("resolve entidades nomeadas", () => {
        expect(cleanText("C &amp; A")).toBe("C & A")
        expect(cleanText("a &lt; b &gt; c")).toBe("a < b > c")
        expect(cleanText("&quot;x&quot;")).toBe('"x"')
    })

    it("resolve referências numéricas", () => {
        expect(cleanText("&#65;&#66;")).toBe("AB")
        expect(cleanText("&#x41;&#x42;")).toBe("AB")
    })

    it("colapsa espaços, &nbsp; e indentação do HTML", () => {
        expect(cleanText("\r\n     NFC-e nº: 20353\r\n   Série: 7")).toBe("NFC-e nº: 20353 Série: 7")
        expect(cleanText("&nbsp;14/10/2026&nbsp;08:28:47")).toBe("14/10/2026 08:28:47")
    })

    it("deixa intacta uma entidade desconhecida", () => {
        expect(cleanText("&naoexiste;")).toBe("&naoexiste;")
    })
})
