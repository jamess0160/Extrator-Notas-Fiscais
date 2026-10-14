import { ExtractNfeData } from "../../src/ExtractNfeData/ExtractNfeData"
import { startFakeSefaz, useFakeSefaz, type FakeSefaz } from "../helpers/fakeSefaz"
import { KEYS } from "../helpers/fixtures"
import { silenceProgress } from "../helpers/silence"

const OUTRA_UF = "35251088212113025439650070000203531414448132"

describe("ExtractNfeData contra o servidor falso", () => {
    silenceProgress()
    let fake: FakeSefaz
    let restore: () => void

    beforeAll(async () => {
        fake = await startFakeSefaz()
        restore = useFakeSefaz(fake, 2_000)
    })

    afterAll(async () => {
        restore()
        await fake.close()
    })

    beforeEach(() => {
        fake.reset()
    })

    it("devolve a nota completa para uma chave válida", async () => {
        const result = await new ExtractNfeData().run(KEYS.farmacia)

        expect(result).toEqual({
            Danfe: KEYS.farmacia,
            Valid: true,
            Company: "COMERCIO DE MEDICAMENTOS BRAIR LTDA",
            Date: "2025-10-31T12:56:53",
            Value: 19.9,
            Items: [{
                Description: "DIPIRONA 1G 20CP GEN PRATI",
                Quantity: 1,
                UN: "UN",
                UnityValue: 23.21,
                TotalValue: 23.21,
            }],
        })
    })

    it("envia a chave no corpo form-urlencoded, como o SEFAZ espera", async () => {
        await new ExtractNfeData().run(KEYS.mercado5)

        expect(fake.requests).toEqual([KEYS.mercado5])
    })

    describe("nota inexistente", () => {

        it("vira NOT_FOUND mesmo com a resposta chegando em HTTP 200", async () => {
            const result = await new ExtractNfeData().run(KEYS.inexistente)

            expect(result.Valid).toBe(false)
            expect(result.Valid === false && result.Error.Code).toBe("NOT_FOUND")
        })

        /**
         * Retry em `NOT_FOUND` seria desperdício garantido: a resposta é definitiva e chega como
         * 200, então nada no transporte indica que valha repetir.
         */
        it("não dispara retry", async () => {
            await new ExtractNfeData().run(KEYS.inexistente)

            expect(fake.requests).toHaveLength(1)
        })
    })

    describe("falha de transporte", () => {

        it("tenta uma segunda vez e devolve FETCH_ERROR quando o 5xx persiste", async () => {
            fake.mode = "500"

            const result = await new ExtractNfeData().run(KEYS.farmacia)

            expect(result.Valid === false && result.Error.Code).toBe("FETCH_ERROR")
            expect(fake.requests).toHaveLength(2)
        })

        it("se recupera quando só a primeira tentativa falha", async () => {
            fake.failNext(1)

            const result = await new ExtractNfeData().run(KEYS.farmacia)

            expect(result.Valid).toBe(true)
            expect(fake.requests).toHaveLength(2)
        })

        it("devolve FETCH_ERROR quando a resposta estoura o timeout", async () => {
            const restoreTimeout = useFakeSefaz(fake, 150)
            fake.mode = "slow"
            fake.slowMs = 600

            try {
                const result = await new ExtractNfeData().run(KEYS.farmacia)

                expect(result.Valid === false && result.Error.Code).toBe("FETCH_ERROR")
            } finally {
                restoreTimeout()
                useFakeSefaz(fake, 2_000)
            }
        }, 10_000)
    })

    it("vira PARSE_ERROR quando a página chega truncada", async () => {
        fake.mode = "truncated"

        const result = await new ExtractNfeData().run(KEYS.mercado22)

        expect(result.Valid === false && result.Error.Code).toBe("PARSE_ERROR")
    })

    /**
     * Fecha o buraco que as fixtures deixam: elas estão em UTF-8, então o caminho latin-1 só é
     * exercitado se o servidor falso converter os bytes — que é o que o modo `latin1` faz.
     */
    it("mantém os acentos íntegros quando os bytes vêm em latin-1", async () => {
        fake.mode = "latin1"

        const result = await new ExtractNfeData().run(KEYS.alimentos15)

        expect(result.Valid).toBe(true)

        if (result.Valid) {
            expect(result.Company).toBe("C & A Comercio de Alimentos Ltda.")
            expect(JSON.stringify(result)).not.toContain("Ã")
            expect(result.Items.map((item) => item.Description).join(" ")).not.toContain("Ã")
        }
    })

    /** Garantia 5 do contrato: chave malformada não gasta requisição. */
    describe("validação antes da rede", () => {

        it.each([
            ["123", "INVALID_LENGTH"],
            ["4325108821211302543965007000020353141444813X", "INVALID_FORMAT"],
            [OUTRA_UF, "UNSUPPORTED_UF"],
        ])("rejeita %s como %s sem chamar o SEFAZ", async (danfe, code) => {
            const result = await new ExtractNfeData().run(danfe)

            expect(result.Valid === false && result.Error.Code).toBe(code)
            expect(fake.requests).toHaveLength(0)
        })
    })
})
