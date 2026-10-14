import { parseFromString } from "dom-parser"
import { GetDanfeDate } from "../../src/ExtractNfeData/GetDanfeDate"
import { KEYS, readFixture } from "../helpers/fixtures"

const extractor = new GetDanfeDate()

const dateOf = (html: string): string => extractor.run(parseFromString(html))

describe("GetDanfeDate", () => {

    it.each([
        [KEYS.farmacia, "2025-10-31T12:56:53"],
        [KEYS.alimentos15, "2026-10-07T13:21:48"],
        [KEYS.alimentos3, "2026-10-12T14:31:12"],
        [KEYS.mercado5, "2026-10-07T13:33:46"],
        [KEYS.mercado22, "2026-10-13T12:26:08"],
    ])("converte a data de emissão de %s para o ISO do contrato", (danfe, expected) => {
        expect(dateOf(readFixture(danfe))).toBe(expected)
    })

    /**
     * A armadilha central deste extrator: a página carrega **duas** datas — a de emissão da nota e
     * a `Data/Hora da Consulta`, que é o momento em que a página foi gerada. Extrair a segunda
     * produziria uma nota com data plausível e errada, que nenhuma asserção de formato pegaria.
     */
    it("não confunde a data de emissão com a data da consulta", () => {
        const html = readFixture(KEYS.farmacia)

        expect(html).toContain("Data/Hora da Consulta")
        expect(html).toContain("14/10/2026")

        const extracted = dateOf(html)

        expect(extracted).toBe("2025-10-31T12:56:53")
        expect(extracted).not.toContain("2026-10-14")
    })

    it("constrói o ISO sem deslocar a hora por fuso horário", () => {
        // `new Date("31/10/2025 12:56:53")` aplicaria o fuso da máquina; a página não informa fuso,
        // então o horário tem de sair exatamente como está impresso na nota.
        expect(dateOf(readFixture(KEYS.farmacia))).toBe("2025-10-31T12:56:53")
        expect(dateOf(readFixture(KEYS.farmacia))).not.toMatch(/Z|[+-]\d{2}:\d{2}$/)
    })

    it("lança quando a data de emissão não está na página", () => {
        const semData = readFixture(KEYS.farmacia).replaceAll("Data de Emissão", "Data de Outra Coisa")

        expect(() => dateOf(semData)).toThrow(/Data de emissão/)
    })
})
