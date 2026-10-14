import { parseFromString } from "dom-parser"
import { cnpjFromDanfe, formatCnpj, normalizeCnpj, periodFromDanfe } from "../../src/cnpj"
import { GetDanfeCnpj } from "../../src/ExtractNfeData/GetDanfeCnpj"
import { KEYS, VALID_KEYS, readFixture } from "../helpers/fixtures"

describe("normalizeCnpj", () => {

    it("tira a pontuação", () => {
        expect(normalizeCnpj("88.212.113/0254-39")).toBe("88212113025439")
    })

    it("aceita o que já vem só com dígitos", () => {
        expect(normalizeCnpj("88212113025439")).toBe("88212113025439")
    })

    it("recusa o que não tem 14 dígitos", () => {
        expect(normalizeCnpj("882121130254")).toBeUndefined()
        expect(normalizeCnpj("882121130254391")).toBeUndefined()
        expect(normalizeCnpj("")).toBeUndefined()
    })
})

describe("cnpjFromDanfe", () => {

    /**
     * Não é heurística: o layout da chave é
     * `UF(2) AAMM(4) CNPJ(14) modelo(2) série(3) número(9) tipoEmissão(1) código(8) DV(1)`.
     */
    it("lê o CNPJ embutido na chave de acesso", () => {
        expect(cnpjFromDanfe(KEYS.farmacia)).toBe("88212113025439")
        expect(cnpjFromDanfe(KEYS.alimentos3)).toBe("11578660000170")
    })

    it.each(VALID_KEYS)("coincide com o CNPJ impresso na página em %s", (danfe) => {
        const naPagina = new GetDanfeCnpj().run(parseFromString(readFixture(danfe)))

        expect(naPagina).toBeDefined()
        expect(naPagina).toBe(cnpjFromDanfe(danfe))
    })
})

describe("formatCnpj", () => {

    it("formata para exibição", () => {
        expect(formatCnpj("88212113025439")).toBe("88.212.113/0254-39")
    })

    it("devolve a entrada intacta quando não dá para formatar", () => {
        expect(formatCnpj("123")).toBe("123")
    })
})

describe("GetDanfeCnpj", () => {

    it("extrai o CNPJ do cabeçalho", () => {
        const dom = parseFromString(readFixture(KEYS.farmacia))

        expect(new GetDanfeCnpj().run(dom)).toBe("88212113025439")
    })

    /**
     * No cabeçalho o CNPJ vem seguido de `Inscrição Estadual: 0290546800`. Capturar dígitos demais
     * produziria um CNPJ plausível e errado, então o teste fixa o recorte.
     */
    it("não invade a inscrição estadual que vem logo depois", () => {
        const html = readFixture(KEYS.farmacia)

        expect(html).toContain("Inscrição Estadual")
        expect(new GetDanfeCnpj().run(parseFromString(html))).toBe("88212113025439")
    })

    /**
     * Ausência é `undefined`, não exceção: quem chama cai na chave de acesso, de modo que uma
     * mudança no cabeçalho do SEFAZ não transforme a nota inteira em `PARSE_ERROR`.
     */
    it("devolve undefined quando a página não traz CNPJ", () => {
        const semCnpj = readFixture(KEYS.farmacia).replaceAll("CNPJ:", "Documento:")

        expect(new GetDanfeCnpj().run(parseFromString(semCnpj))).toBeUndefined()
    })
})

describe("periodFromDanfe", () => {

    it("lê o AAMM da chave sem consultar nada", () => {
        expect(periodFromDanfe(KEYS.farmacia)).toBe("2025-10")
        expect(periodFromDanfe(KEYS.mercado5)).toBe("2026-10")
    })

    it("recusa mês impossível em vez de devolver data inválida", () => {
        // Mesmo layout, `AAMM` = 2613: mês 13 não existe, e devolver "2026-13" propagaria lixo.
        expect(periodFromDanfe("43261306348488000390651060003029821903594352")).toBeUndefined()
        expect(periodFromDanfe("43260006348488000390651060003029821903594352")).toBeUndefined()
    })

    it("recusa o que não é numérico na posição do período", () => {
        expect(periodFromDanfe("43ab1006348488000390651060003029821903594352")).toBeUndefined()
        expect(periodFromDanfe("432")).toBeUndefined()
    })
})
