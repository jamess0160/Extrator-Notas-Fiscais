/**
 * Monta o pacote distribuível da skill em `skill-dist/notas-fiscais/`.
 *
 * O pacote é auto-suficiente: um SKILL.md e **um** arquivo JavaScript com a CLI e suas
 * dependências embutidas. Quem recebe não roda `npm install`, não compila e não precisa de git —
 * só de Node. E, por ser JavaScript legível em vez de binário, continua auditável: o bundle é
 * reprodutível byte a byte a partir do código-fonte público, então o SHA-256 anotado no LEIA-ME
 * pode ser conferido por quem quiser.
 */
const { execFileSync } = require("node:child_process")
const { createHash } = require("node:crypto")
const fs = require("node:fs")
const path = require("node:path")

const CLI_DIR = path.join(__dirname, "..")
const REPO_DIR = path.join(CLI_DIR, "..")
const OUT_DIR = path.join(REPO_DIR, "skill-dist", "notas-fiscais")
const BUNDLE_NAME = "notas-fiscais.cjs"

const { version } = require(path.join(CLI_DIR, "package.json"))

function git(...args) {
    try {
        return execFileSync("git", args, { cwd: REPO_DIR, encoding: "utf8" }).trim()
    } catch {
        return ""
    }
}

function repoUrl() {
    const remote = git("remote", "get-url", "origin")

    return remote.replace(/\.git$/, "") || "(remote não configurado)"
}

function main() {
    fs.mkdirSync(OUT_DIR, { recursive: true })

    const bundlePath = path.join(OUT_DIR, BUNDLE_NAME)
    const esbuild = path.join(CLI_DIR, "node_modules", "esbuild", "bin", "esbuild")

    const bundleArgs = [
        "src/index.ts",
        "--bundle",
        "--platform=node",
        "--target=node20",
        "--format=cjs",
        `--define:__NF_VERSION__="${version}"`,
        `--outfile=${bundlePath}`,
    ]

    execFileSync(process.execPath, [esbuild, ...bundleArgs], { cwd: CLI_DIR, stdio: "inherit" })

    const bytes = fs.readFileSync(bundlePath)
    const sha256 = createHash("sha256").update(bytes).digest("hex")

    fs.copyFileSync(
        path.join(REPO_DIR, ".claude", "skills", "notas-fiscais", "SKILL.md"),
        path.join(OUT_DIR, "SKILL.md"),
    )

    fs.writeFileSync(path.join(OUT_DIR, "VERSION"), version + "\n")

    const sujo = git("status", "--porcelain") !== ""

    const leiaMe = fs
        .readFileSync(path.join(REPO_DIR, "docs", "pacote-leia-me.md"), "utf8")
        .replaceAll("{{VERSION}}", version)
        .replaceAll("{{COMMIT}}", git("rev-parse", "--short", "HEAD") || "(desconhecido)")
        .replaceAll("{{SHA256}}", sha256)
        .replaceAll("{{REPO_URL}}", repoUrl())
        .replaceAll("{{BUNDLE}}", BUNDLE_NAME)
        .replaceAll("{{TAMANHO}}", `${Math.round(bytes.length / 1024)} KB`)

    fs.writeFileSync(path.join(OUT_DIR, "LEIA-ME.md"), leiaMe)

    // `String.fromCharCode(92)` em vez da barra invertida literal: evita escapar
    // separador de caminho do Windows no meio de um regex.
    const relativo = path.relative(REPO_DIR, OUT_DIR).split(String.fromCharCode(92)).join("/")

    console.log(`\npacote: ${relativo}`)
    console.log(`versão: ${version}`)
    console.log(`bundle: ${Math.round(bytes.length / 1024)} KB`)
    console.log(`sha256: ${sha256}`)

    if (sujo) {
        console.log(
            "\nAVISO: a árvore de trabalho tem alterações não commitadas, então o commit anotado\n" +
            "no LEIA-ME não descreve exatamente este pacote. Commite antes de distribuir.",
        )
    }

    console.log("\nPara zipar:")
    console.log(`  PowerShell: Compress-Archive -Path ${relativo} -DestinationPath notas-fiscais.zip`)
    console.log(`  bash:       (cd ${path.dirname(relativo)} && zip -r ../notas-fiscais.zip notas-fiscais)`)
}

main()
