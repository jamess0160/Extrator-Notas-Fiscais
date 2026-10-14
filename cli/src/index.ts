import path from "node:path"
import dotenv from "dotenv"
import { BatchRunner } from "./BatchRunner"

// `quiet` é obrigatório, não cosmético: sem ele o dotenv escreve um banner no **stdout**, que o
// contrato reserva exclusivamente para o JSON. Os dois caminhos cobrem rodar de `cli/` ou da raiz
// do repositório; a CLI funciona normalmente sem nenhum `.env` presente.
dotenv.config({
    path: [path.resolve(__dirname, "../.env"), path.resolve(process.cwd(), ".env")],
    quiet: true,
})

const USAGE = [
    "Uso: node dist/index.js <chave-danfe> [chave-danfe ...]",
    "",
    "  Consulta uma ou mais NFC-e do RS pela chave de acesso de 44 dígitos",
    "  e escreve o JSON de resultado no stdout.",
    "",
]

async function main(): Promise<void> {
    const danfes = process.argv.slice(2)

    if (danfes.length === 0) {
        process.stderr.write(USAGE.join("\n"))
        process.exitCode = 1
        return
    }

    const result = await new BatchRunner().run(danfes)

    // Única escrita em stdout de todo o programa.
    process.stdout.write(JSON.stringify(result))
}

main().catch((error: unknown) => {
    const message = error instanceof Error ? error.message : String(error)

    process.stderr.write(`Falha irrecuperável: ${message}\n`)
    process.exitCode = 1
})
