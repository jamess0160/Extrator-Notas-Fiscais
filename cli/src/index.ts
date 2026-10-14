import path from "node:path"
import dotenv from "dotenv"
import { BatchRunner } from "./BatchRunner"
import { VERSION } from "./version"

// `quiet` é obrigatório, não cosmético: sem ele o dotenv escreve um banner no **stdout**, que o
// contrato reserva exclusivamente para o JSON. Os dois caminhos cobrem rodar de `cli/` ou da raiz
// do repositório; a CLI funciona normalmente sem nenhum `.env` presente.
dotenv.config({
    path: [path.resolve(__dirname, "../.env"), path.resolve(process.cwd(), ".env")],
    quiet: true,
})

const USAGE = [
    `Consulta de NFC-e do RS — versão ${VERSION}`,
    "",
    "Uso: node <cli> <chave-danfe> [chave-danfe ...]",
    "",
    "  Consulta uma ou mais NFC-e do RS pela chave de acesso de 44 dígitos",
    "  e escreve o JSON de resultado no stdout.",
    "",
    "Opções:",
    "  --version, -v   imprime a versão e sai",
    "  --help, -h      imprime esta ajuda e sai",
    "",
]

async function main(): Promise<void> {
    const args = process.argv.slice(2)

    // `--version` e `--help` são as duas únicas invocações em que o stdout não leva JSON: não são
    // consultas, então não há envelope que alguém possa confundir ao fazer o parse.
    if (args.includes("--version") || args.includes("-v")) {
        process.stdout.write(VERSION + "\n")
        return
    }

    if (args.includes("--help") || args.includes("-h")) {
        process.stdout.write(USAGE.join("\n") + "\n")
        return
    }

    const desconhecida = args.find((arg) => arg.startsWith("-"))

    if (desconhecida) {
        process.stderr.write("Opção desconhecida: " + desconhecida + "\n\n" + USAGE.join("\n"))
        process.exitCode = 1
        return
    }

    if (args.length === 0) {
        process.stderr.write(USAGE.join("\n"))
        process.exitCode = 1
        return
    }

    const result = await new BatchRunner().run(args)

    // Única escrita em stdout de todo o programa, nas invocações de consulta.
    process.stdout.write(JSON.stringify(result))
}

main().catch((error: unknown) => {
    const message = error instanceof Error ? error.message : String(error)

    process.stderr.write("Falha irrecuperável: " + message + "\n")
    process.exitCode = 1
})
