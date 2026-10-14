import { parseFromString } from "dom-parser"
import { GetDanfeValue } from "../../src/ExtractNfeData/GetDanfeValue"
import { KEYS, readFixture, readSynthetic } from "../helpers/fixtures"

const extractor = new GetDanfeValue()

const valueOf = (html: string): number => extractor.run(parseFromString(html))

describe("GetDanfeValue", () => {

    it("lê o valor de uma nota com forma de pagamento única", () => {
        expect(valueOf(readFixture(KEYS.farmacia))).toBe(19.9)
        expect(valueOf(readFixture(KEYS.alimentos3))).toBe(32.9)
        expect(valueOf(readFixture(KEYS.mercado5))).toBe(61.36)
    })

    /**
     * O teste que justifica a fixture sintética. A nota real com duas formas de pagamento
     * (`...8018091145057451`) tem `Cartão 279,58` + `Dinheiro 0,00`: somar as duas linhas e ler só
     * a primeira produzem o mesmo número, então ela não distingue a implementação correta de um
     * bug de "pega só a primeira linha". Com `60,00` + `40,00` a diferença aparece.
     */
    it("soma todas as linhas de pagamento, não apenas a primeira", () => {
        expect(valueOf(readSynthetic("dois-pagamentos-distintos"))).toBe(100)
    })

    it("converte o separador de milhar pt-BR", () => {
        expect(valueOf(readSynthetic("pagamento-com-milhar"))).toBe(1234.56)
    })

    /**
     * Distinguir "soma zero" de "não achei" importa: um total `0` silencioso passa por resultado
     * válido, e é exatamente o que apareceria se o bloco mudasse de nome na página do SEFAZ.
     */
    it("lança quando o bloco FORMA PAGAMENTO não existe, em vez de devolver 0", () => {
        const semBloco = readFixture(KEYS.farmacia).replaceAll("FORMA PAGAMENTO", "OUTRA COISA")

        expect(() => valueOf(semBloco)).toThrow()
    })
})
