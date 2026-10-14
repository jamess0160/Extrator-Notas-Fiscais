import { ExtractNfeData } from "../../src/ExtractNfeData/ExtractNfeData"
import { KEYS } from "../helpers/fixtures"

/**
 * Único teste que bate no SEFAZ de verdade, e por isso fora da suíte padrão: roda com
 * `npm run test:e2e` (que define `RUN_E2E=1`).
 *
 * É o único capaz de detectar mudança na página do governo — inclusive na frase do sentinel de nota
 * inexistente, que o servidor falso apenas presume — e também o único que falha por motivos
 * alheios ao código: SEFAZ fora do ar, rede, nota expurgada da base. Misturá-lo aos demais tornaria
 * a suíte intermitente.
 *
 * `E2E_DANFE` troca a chave consultada; o default é a chave da fixture da farmácia, cujos valores
 * esperados estão abaixo e vêm da própria nota.
 */
const ATIVO = process.env.RUN_E2E === "1"
const describeE2E = ATIVO ? describe : describe.skip

const DANFE = process.env.E2E_DANFE || KEYS.farmacia

const ESPERADO = {
    Company: "COMERCIO DE MEDICAMENTOS BRAIR LTDA",
    Date: "2025-10-31T12:56:53",
    Value: 19.9,
}

describeE2E("integração real com o SEFAZ-RS", () => {

    beforeAll(() => {
        // Garante que não sobrou apontamento para servidor falso de outra execução.
        delete process.env.SEFAZ_URL
    })

    it("consulta uma nota real e extrai os campos do contrato", async () => {
        const result = await new ExtractNfeData().run(DANFE)

        if (result.Valid === false) {
            throw new Error(`consulta real falhou: ${result.Error.Code} — ${result.Error.Message}`)
        }

        expect(result.Company).not.toBe("")
        expect(result.Date).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/)
        expect(result.Value).toBeGreaterThan(0)
        expect(result.Items.length).toBeGreaterThan(0)

        // Acentuação íntegra é o sinal de que a decodificação acertou o charset real da página,
        // que é justamente o que as fixtures (salvas em UTF-8) não conseguem provar.
        expect(JSON.stringify(result)).not.toMatch(/Ã.|�/)

        if (DANFE === KEYS.farmacia) {
            expect(result.Company).toBe(ESPERADO.Company)
            expect(result.Date).toBe(ESPERADO.Date)
            expect(result.Value).toBe(ESPERADO.Value)
        }
    }, 60_000)

    it("ainda reconhece o sentinel de nota inexistente na resposta real", async () => {
        const result = await new ExtractNfeData().run(KEYS.inexistente)

        expect(result.Valid).toBe(false)
        expect(result.Valid === false && result.Error.Code).toBe("NOT_FOUND")
    }, 60_000)
})
