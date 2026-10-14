import { BatchRunner } from "../../src/BatchRunner"
import { startFakeSefaz, useFakeSefaz, type FakeSefaz } from "../helpers/fakeSefaz"
import { KEYS } from "../helpers/fixtures"
import { silenceProgress } from "../helpers/silence"

const OUTRA_UF = "35251088212113025439650070000203531414448132"

/** Chaves bem formadas e sem fixture: o servidor falso responde a página de nota inexistente. */
const sinteticas = (quantidade: number): string[] =>
    Array.from({ length: quantidade }, (_, i) =>
        "43" + String(i).padStart(42, "0"))

describe("BatchRunner contra o servidor falso", () => {
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

    it("devolve um item por chave e fecha as contas do envelope", async () => {
        const chaves = [KEYS.farmacia, KEYS.inexistente, KEYS.mercado5, OUTRA_UF]

        const result = await new BatchRunner().run(chaves)

        expect(result.Results).toHaveLength(4)
        expect(result.Total).toBe(result.Results.length)
        expect(result.Success + result.Failed).toBe(result.Total)
        expect(result.Success).toBe(2)
        expect(result.Failed).toBe(2)
    })

    /**
     * A ordem não pode seguir a ordem de conclusão: com concorrência, a consulta mais rápida
     * termina primeiro, e quem consome casa `Results[i]` com a chave que passou.
     */
    it("preserva a ordem de primeira aparição no argv", async () => {
        const chaves = [KEYS.mercado22, KEYS.farmacia, KEYS.inexistente, KEYS.alimentos3]

        const result = await new BatchRunner().run(chaves)

        expect(result.Results.map((item) => item.Danfe)).toEqual(chaves)
    })

    it("deduplica chaves repetidas, gastando uma requisição só (D6)", async () => {
        const result = await new BatchRunner().run([
            KEYS.farmacia,
            KEYS.mercado5,
            KEYS.farmacia,
            KEYS.farmacia,
        ])

        expect(result.Total).toBe(2)
        expect(result.Results.map((item) => item.Danfe)).toEqual([KEYS.farmacia, KEYS.mercado5])
        expect(fake.requests.filter((key) => key === KEYS.farmacia)).toHaveLength(1)
    })

    /** D4: uma chave problemática não derruba o lote. */
    it("isola a falha de uma chave e entrega as demais", async () => {
        const result = await new BatchRunner().run([KEYS.farmacia, KEYS.inexistente, KEYS.mercado5])

        const [primeira, segunda, terceira] = result.Results

        expect(primeira?.Valid).toBe(true)
        expect(segunda?.Valid === false && segunda.Error.Code).toBe("NOT_FOUND")
        expect(terceira?.Valid).toBe(true)
    })

    it("marca FETCH_ERROR quando o servidor falha, sem abortar o lote", async () => {
        fake.mode = "500"

        const result = await new BatchRunner().run([KEYS.farmacia, KEYS.mercado5])

        expect(result.Failed).toBe(2)
        expect(result.Results.every((item) => item.Valid === false
            && item.Error.Code === "FETCH_ERROR")).toBe(true)
    })

    /**
     * Medido no servidor, não no cliente: o atraso injetado é o que faz as requisições se
     * sobreporem. Sem ele todas respondem na hora e o pico ficaria em 1 sem provar nada.
     */
    it("nunca passa de 3 requisições simultâneas", async () => {
        fake.mode = "slow"
        fake.slowMs = 60

        const result = await new BatchRunner().run(sinteticas(9))

        expect(result.Total).toBe(9)
        expect(fake.requests).toHaveLength(9)
        expect(fake.peakConcurrency).toBeGreaterThan(1)
        expect(fake.peakConcurrency).toBeLessThanOrEqual(3)
    }, 15_000)

    it("respeita o limite de concorrência configurado por ambiente", async () => {
        const anterior = process.env.CLI_CONCURRENCY
        process.env.CLI_CONCURRENCY = "1"
        fake.mode = "slow"
        fake.slowMs = 20

        try {
            await new BatchRunner().run(sinteticas(4))

            expect(fake.peakConcurrency).toBe(1)
        } finally {
            if (anterior === undefined) {
                delete process.env.CLI_CONCURRENCY
            } else {
                process.env.CLI_CONCURRENCY = anterior
            }
        }
    }, 15_000)

    it("não dispara nenhuma requisição para um lote só de chaves inválidas", async () => {
        const result = await new BatchRunner().run(["123", OUTRA_UF, "x".repeat(44)])

        expect(result.Failed).toBe(3)
        expect(fake.requests).toHaveLength(0)
    })
})
