import { decodeHtml } from "../../src/decode"
import { KEYS, readFixtureBuffer } from "../helpers/fixtures"

const ACENTOS = "COMÉRCIO DE AÇÚCAR & PÃES LTDA — ÁÉÍÓÚ ÃÕ Ç"

describe("decodeHtml", () => {

    /**
     * O caso que as fixtures não cobrem. A página do SEFAZ declara `charset=iso-8859-1`, mas os
     * arquivos salvos no repositório estão em UTF-8 válido (reconvertidos pelo navegador). Se o
     * endpoint ao vivo servir bytes latin-1 de verdade, `Company` e `Description` chegam com acento
     * corrompido e a suíte passa igual — por isso os bytes aqui são montados à mão.
     */
    it("decodifica bytes latin-1 com acento", () => {
        const bytes = Buffer.from(ACENTOS.replace("—", "-"), "latin1")

        expect(decodeHtml(bytes)).toBe(ACENTOS.replace("—", "-"))
    })

    it("decodifica bytes UTF-8 com acento", () => {
        expect(decodeHtml(Buffer.from(ACENTOS, "utf8"))).toBe(ACENTOS)
    })

    it("não altera conteúdo ASCII", () => {
        expect(decodeHtml(Buffer.from("<html>SUPERMERCADO SBS</html>", "utf8")))
            .toBe("<html>SUPERMERCADO SBS</html>")
    })

    /**
     * A decisão é tomada pelos bytes, não pela declaração de charset: texto latin-1 com acento é
     * sequência UTF-8 inválida, e é isso que separa os dois casos. Confiar na declaração
     * corromperia as fixtures; confiar em UTF-8 corromperia a página real.
     */
    it("preserva a fixture real, que vem em UTF-8 apesar de declarar iso-8859-1", () => {
        const buffer = readFixtureBuffer(KEYS.farmacia)
        const decoded = decodeHtml(buffer)

        expect(decoded).toContain("charset=iso-8859-1")
        expect(decoded).toContain("Data de Emissão")
        expect(decoded).not.toContain("EmissÃ£o")
    })

    it("recupera a mesma página quando os bytes vêm em latin-1", () => {
        const utf8 = readFixtureBuffer(KEYS.farmacia).toString("utf8")
        const latin1Bytes = Buffer.from(utf8, "latin1")

        expect(decodeHtml(latin1Bytes)).toContain("Data de Emissão")
    })
})
