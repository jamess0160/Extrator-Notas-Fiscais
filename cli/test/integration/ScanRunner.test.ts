import { ScanRunner } from "../../src/ScanRunner"
import type { ScanSuccess } from "../../src/types"
import { startFakeSefaz, useFakeSefaz, type FakeSefaz } from "../helpers/fakeSefaz"
import { KEYS } from "../helpers/fixtures"
import { silenceProgress } from "../helpers/silence"

const OUTRA_UF = "35251088212113025439650070000203531414448132"

describe("ScanRunner", () => {
    silenceProgress()

    let fake: FakeSefaz
    let restore: () => void

    beforeAll(async () => {
        fake = await startFakeSefaz()
        restore = useFakeSefaz(fake, 5_000)
    })

    afterAll(async () => {
        restore()
        await fake.close()
    })

    beforeEach(() => {
        fake.reset()
    })

    /**
     * A propriedade central do `scan`, e a razão de ele existir: o CNPJ sai dos dígitos 7 a 20 da
     * própria chave, então identificar o ramo não custa nenhuma requisição ao SEFAZ. Se esta
     * asserção cair, o comando perdeu o propósito — passou a ser um `full` mais pobre.
     */
    it("não toca o SEFAZ", async () => {
        await new ScanRunner().run([KEYS.alimentos3, KEYS.mercado5, KEYS.farmacia])

        expect(fake.requests).toEqual([])
    })

    it("consulta uma vez por estabelecimento, não por nota", async () => {
        // As duas últimas chaves são do mesmo CNPJ: 3 notas, 2 cadastros.
        await new ScanRunner().run([KEYS.alimentos3, KEYS.mercado5, KEYS.mercado22])

        expect(fake.cnpjRequests).toEqual(["11578660000170", "21387187000106"])
    })

    it("identifica emitente, ramo e competência", async () => {
        const result = await new ScanRunner().run([KEYS.alimentos3])

        expect(result.Results[0]).toEqual({
            Danfe: KEYS.alimentos3,
            Valid: true,
            Cnpj: "11578660000170",
            // Razão social do cadastro, não da nota: no `scan` não há página de onde lê-la.
            Company: "RAZAO SOCIAL LTDA",
            TradeName: "MINI KALZONE",
            Cnae: {
                Code: "5611203",
                Description: "Lanchonetes, casas de chá, de sucos e similares",
            },
            Segment: "Restaurante",
            Period: "2026-10",
        })
    })

    it("agrupa por ramo com contagem de estabelecimentos e de notas", async () => {
        const result = await new ScanRunner().run([KEYS.mercado5, KEYS.alimentos3, KEYS.mercado22, KEYS.alimentos15])

        expect(result.Segments).toEqual([
            {
                Segment: "Supermercado",
                Establishments: 2,
                Notes: 3,
                Danfes: [KEYS.mercado5, KEYS.mercado22, KEYS.alimentos15],
            },
            {
                Segment: "Restaurante",
                Establishments: 1,
                Notes: 1,
                Danfes: [KEYS.alimentos3],
            },
        ])
    })

    it("entrega as chaves do grupo prontas para o full", async () => {
        const result = await new ScanRunner().run([KEYS.mercado5, KEYS.alimentos3, KEYS.mercado22])

        const mercado = result.Segments.find((group) => group.Segment === "Supermercado")

        expect(mercado?.Danfes).toEqual([KEYS.mercado5, KEYS.mercado22])
        expect(mercado?.Danfes.every((danfe) => danfe.length === 44)).toBe(true)
    })

    describe("cadastro indisponível", () => {

        it("mantém a nota válida e sem ramo", async () => {
            fake.cnpjMode = "500"

            const result = await new ScanRunner().run([KEYS.mercado5])
            const item = result.Results[0] as ScanSuccess

            expect(item.Valid).toBe(true)
            // O CNPJ e a competência vêm da chave, então sobrevivem à queda do serviço externo.
            expect(item.Cnpj).toBe("21387187000106")
            expect(item.Period).toBe("2026-10")
            expect(item.Segment).toBeNull()
            expect(item.Cnae).toBeNull()
        })

        /**
         * Some com a nota e o fluxo inteiro perde sentido: o usuário escolheria o que analisar sem
         * saber que existe algo fora das opções apresentadas.
         */
        it("mostra as notas sem ramo como grupo próprio, no fim da lista", async () => {
            fake.cnpjMode = "404"

            const result = await new ScanRunner().run([KEYS.mercado5, KEYS.alimentos3])

            expect(result.Resolved).toBe(0)
            expect(result.Unresolved).toBe(2)
            expect(result.Segments).toEqual([{
                Segment: null,
                Establishments: 2,
                Notes: 2,
                Danfes: [KEYS.mercado5, KEYS.alimentos3],
            }])
        })

        it("põe o grupo sem ramo depois dos identificados", async () => {
            const result = await new ScanRunner().run([KEYS.farmacia, KEYS.mercado5])

            expect(result.Segments.map((group) => group.Segment)).toEqual(["Supermercado", null])
        })
    })

    describe("validação, que continua antes de tudo", () => {

        it("rejeita chave malformada sem consultar cadastro", async () => {
            const result = await new ScanRunner().run(["123", OUTRA_UF])

            expect(fake.cnpjRequests).toEqual([])
            expect(result.Results.map((item) => item.Valid === false && item.Error.Code))
                .toEqual(["INVALID_LENGTH", "UNSUPPORTED_UF"])
        })

        it("conta as chaves inválidas no envelope e não as agrupa", async () => {
            const result = await new ScanRunner().run([KEYS.mercado5, "123"])

            expect(result).toMatchObject({ Total: 2, Success: 1, Failed: 1, Resolved: 1, Unresolved: 0 })
            expect(result.Segments.flatMap((group) => group.Danfes)).toEqual([KEYS.mercado5])
        })
    })

    it("deduplica preservando a ordem de primeira aparição", async () => {
        const result = await new ScanRunner().run([KEYS.mercado5, KEYS.alimentos3, KEYS.mercado5])

        expect(result.Total).toBe(2)
        expect(result.Results.map((item) => item.Danfe)).toEqual([KEYS.mercado5, KEYS.alimentos3])
    })

    it("mantém Total igual ao número de itens e a soma coerente", async () => {
        const result = await new ScanRunner().run([KEYS.mercado5, KEYS.alimentos3, "123"])

        expect(result.Total).toBe(result.Results.length)
        expect(result.Success + result.Failed).toBe(result.Total)
        expect(result.Resolved + result.Unresolved).toBe(result.Success)
    })
})
