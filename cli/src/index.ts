import path from "node:path"
import dotenv from "dotenv"
import { BatchRunner } from "./BatchRunner"
import { ScanRunner } from "./ScanRunner"
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
    "Uso: node <cli> [comando] <chave-danfe> [chave-danfe ...]",
    "",
    "Comandos:",
    "  scan   identifica emitente e ramo de cada nota pelo CNPJ contido na chave,",
    "         sem consultar o SEFAZ. Serve para decidir quais notas analisar.",
    "  full   consulta a nota inteira no SEFAZ: data, valor e itens. É o padrão",
    "         quando nenhum comando é informado.",
    "",
    "Opções:",
    "  --version, -v   imprime a versão e sai",
    "  --help, -h      imprime esta ajuda e sai",
    "",
]

const COMMANDS = ["scan", "full"] as const

type Command = typeof COMMANDS[number]

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
        return fail("Opção desconhecida: " + desconhecida)
    }

    // Comando ausente significa `full`: é o formato que já está distribuído por aí, e quebrá-lo
    // obrigaria quem tem a versão antiga da skill a atualizar antes de conseguir consultar.
    const command: Command = isCommand(args[0]) ? args[0] : "full"
    const danfes = isCommand(args[0]) ? args.slice(1) : args

    if (danfes.length === 0) {
        process.stderr.write(USAGE.join("\n"))
        process.exitCode = 1
        return
    }

    const result = command === "scan"
        ? await new ScanRunner().run(danfes)
        : await new BatchRunner().run(danfes)

    // Única escrita em stdout de todo o programa, nas invocações de consulta.
    process.stdout.write(JSON.stringify(result))
}

function isCommand(arg: string | undefined): arg is Command {
    return arg !== undefined && (COMMANDS as readonly string[]).includes(arg)
}

function fail(message: string): void {
    process.stderr.write(message + "\n\n" + USAGE.join("\n"))
    process.exitCode = 1
}

main().catch((error: unknown) => {
    const message = error instanceof Error ? error.message : String(error)

    process.stderr.write("Falha irrecuperável: " + message + "\n")
    process.exitCode = 1
})
