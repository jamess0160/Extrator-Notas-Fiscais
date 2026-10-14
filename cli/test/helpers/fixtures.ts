import fs from "node:fs"
import path from "node:path"

export const FIXTURES_DIR = path.join(__dirname, "..", "fixtures")
export const SYNTHETIC_DIR = path.join(FIXTURES_DIR, "sinteticas")

/** Chaves das fixtures reais, para os testes não repetirem 44 dígitos a cada asserção. */
export const KEYS = {
    farmacia: "43251088212113025439650070000203531414448132",
    alimentos15: "43261006348488000390651060003029821903594352",
    inexistente: "43261006348488000390651060007029821903594352",
    alimentos3: "43261011578660000170650130001623611986757160",
    mercado5: "43261021387187000106651040008053551431277805",
    mercado22: "43261021387187000106651050008018091145057451",
} as const

/** As 5 fixtures de nota válida. A sexta (`inexistente`) não tem dados para extrair. */
export const VALID_KEYS = [
    KEYS.farmacia,
    KEYS.alimentos15,
    KEYS.alimentos3,
    KEYS.mercado5,
    KEYS.mercado22,
] as const

export function fixturePath(danfe: string): string {
    return path.join(FIXTURES_DIR, `${danfe}.html`)
}

export function hasFixture(danfe: string): boolean {
    return fs.existsSync(fixturePath(danfe))
}

/**
 * Lê a fixture como **texto**, do jeito que a CLI recebe depois da decodificação.
 * Para exercitar o caminho de bytes, use `readFixtureBuffer`.
 */
export function readFixture(danfe: string): string {
    return fs.readFileSync(fixturePath(danfe), "utf8")
}

export function readFixtureBuffer(danfe: string): Buffer {
    return fs.readFileSync(fixturePath(danfe))
}

export function readSynthetic(name: string): string {
    return fs.readFileSync(path.join(SYNTHETIC_DIR, `${name}.html`), "utf8")
}
