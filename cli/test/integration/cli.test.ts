import { execFile } from "node:child_process"
import fs from "node:fs"
import path from "node:path"
import { promisify } from "node:util"
import { startFakeSefaz, type FakeSefaz } from "../helpers/fakeSefaz"
import { KEYS } from "../helpers/fixtures"
import type { BatchResult } from "../../src/types"

const run = promisify(execFile)

const CLI = path.join(__dirname, "..", "..", "dist", "index.js")
const OUTRA_UF = "35251088212113025439650070000203531414448132"

interface Execution {
    code: number
    stdout: string
    stderr: string
}

/**
 * Roda a CLI **compilada**, como a skill faz. Não é redundante com os testes em processo: só aqui
 * entram argv, exit code e a separação real entre stdout e stderr.
 */
async function runCli(fake: Pick<FakeSefaz, "url" | "cnpjUrl">, args: string[]): Promise<Execution> {
    try {
        const { stdout, stderr } = await run(process.execPath, [CLI, ...args], {
            env: {
                ...process.env,
                SEFAZ_URL: fake.url,
                CNPJ_API_URL: fake.cnpjUrl,
                SEFAZ_TIMEOUT_MS: "5000",
            },
            maxBuffer: 50 * 1024 * 1024,
        })

        return { code: 0, stdout, stderr }
    } catch (error) {
        const failure = error as { code?: number, stdout?: string, stderr?: string }

        return {
            code: failure.code ?? 1,
            stdout: failure.stdout ?? "",
            stderr: failure.stderr ?? "",
        }
    }
}

describe("conformidade da CLI com o contrato", () => {
    let fake: FakeSefaz

    beforeAll(async () => {
        if (!fs.existsSync(CLI)) {
            throw new Error(`CLI não compilada em ${CLI}; rode "npm run build"`)
        }

        fake = await startFakeSefaz()
    })

    afterAll(async () => {
        await fake.close()
    })

    it("sai com 0 e JSON parseável mesmo com falhas parciais", async () => {
        const { code, stdout } = await runCli(fake, [
            KEYS.farmacia,
            KEYS.inexistente,
            OUTRA_UF,
        ])

        expect(code).toBe(0)

        const result = JSON.parse(stdout) as BatchResult

        expect(result.Total).toBe(3)
        expect(result.Success).toBe(1)
        expect(result.Failed).toBe(2)
    })

    it("sai com 0 mesmo quando todas as chaves falham", async () => {
        const { code, stdout } = await runCli(fake, [KEYS.inexistente, OUTRA_UF])

        expect(code).toBe(0)
        expect((JSON.parse(stdout) as BatchResult).Success).toBe(0)
    })

    it("sai com 1 e mostra o uso quando não recebe chave", async () => {
        const { code, stdout, stderr } = await runCli(fake, [])

        expect(code).toBe(1)
        expect(stdout).toBe("")
        expect(stderr).toContain("Uso:")
    })

    /**
     * O teste de vazamento. A skill faz `JSON.parse` do stdout inteiro, sem recorte: um
     * `console.log` de depuração, ou o banner que o dotenv imprime sem `quiet`, quebra a skill sem
     * quebrar nada aqui dentro.
     */
    it("escreve exclusivamente JSON no stdout, com o progresso no stderr", async () => {
        const { stdout, stderr } = await runCli(fake, [KEYS.farmacia, KEYS.mercado5])

        expect(() => JSON.parse(stdout)).not.toThrow()
        expect(stdout.startsWith("{")).toBe(true)
        expect(stdout.trimEnd().endsWith("}")).toBe(true)
        expect(stdout).not.toContain("consultando")
        expect(stderr).toContain("consultando")
    })

    it("entrega o nome fantasia consultado pelo CNPJ", async () => {
        const { stdout } = await runCli(fake, [KEYS.alimentos3])

        const [nota] = (JSON.parse(stdout) as BatchResult).Results

        expect(nota?.Valid === true && nota.Cnpj).toBe("11578660000170")
        expect(nota?.Valid === true && nota.TradeName).toBe("MINI KALZONE")
        expect(nota?.Valid === true && nota.Company).toBe("BPR COMERCIO DE ALIMENTOS EIRELI")
    })

    it("entrega a saída campo a campo como o contrato define", async () => {
        const { stdout } = await runCli(fake, [KEYS.farmacia, KEYS.inexistente])

        const result = JSON.parse(stdout) as BatchResult

        expect(Object.keys(result)).toEqual(["Total", "Success", "Failed", "Results"])

        const [nota, erro] = result.Results

        expect(nota).toEqual({
            Danfe: KEYS.farmacia,
            Valid: true,
            Cnpj: "88212113025439",
            Company: "COMERCIO DE MEDICAMENTOS BRAIR LTDA",
            TradeName: null,
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

        expect(erro).toEqual({
            Danfe: KEYS.inexistente,
            Valid: false,
            Error: {
                Code: "NOT_FOUND",
                Message: expect.stringContaining("não encontrada") as string,
            },
        })
    })
})
