import { parseFromString } from "dom-parser"
import { GetDanfeCompany } from "../../src/ExtractNfeData/GetDanfeCompany"
import { KEYS, readFixture } from "../helpers/fixtures"

const extractor = new GetDanfeCompany()

const companyOf = (html: string): string => extractor.run(parseFromString(html))

describe("GetDanfeCompany", () => {

    it.each([
        [KEYS.farmacia, "COMERCIO DE MEDICAMENTOS BRAIR LTDA"],
        [KEYS.alimentos3, "BPR COMERCIO DE ALIMENTOS EIRELI"],
        [KEYS.mercado5, "Supermercado SBS LTDA"],
        [KEYS.mercado22, "Supermercado SBS LTDA"],
    ])("extrai a razão social de %s", (danfe, expected) => {
        expect(companyOf(readFixture(danfe))).toBe(expected)
    })

    it("resolve entidades HTML na razão social", () => {
        // O dom-parser devolve HTML cru: sem decodificar, esta nota sairia como
        // "C &amp; A Comercio de Alimentos Ltda." no JSON.
        expect(companyOf(readFixture(KEYS.alimentos15))).toBe("C & A Comercio de Alimentos Ltda.")
    })

    /**
     * O código anterior lia `getElementsByClassName(...)[0]?.innerHTML` com o campo tipado como
     * `string`: quando a classe não existia, `undefined` vazava para o JSON sem erro algum.
     */
    it("lança quando a classe do cabeçalho não existe, em vez de devolver undefined", () => {
        const semClasse = readFixture(KEYS.farmacia).replaceAll("NFCCabecalho_SubTitulo", "OutraClasse")

        expect(() => companyOf(semClasse)).toThrow(/empresa/)
    })
})
