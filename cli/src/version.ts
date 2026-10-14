import { createRequire } from "node:module"

/**
 * Substituído em tempo de bundle por `--define` (ver scripts/package.js). Fora do bundle a
 * declaração não existe, e `typeof` sobre identificador não declarado é seguro em JavaScript —
 * devolve `"undefined"` em vez de lançar.
 */
declare const __NF_VERSION__: string | undefined

function fromPackageJson(): string {
    try {
        const localRequire = createRequire(__filename)
        const pkg = localRequire("../package.json") as { version?: string }

        return pkg.version ?? "dev"
    } catch {
        return "dev"
    }
}

/**
 * Versão da CLI. No pacote distribuído vem embutida no próprio arquivo; rodando do código-fonte,
 * sai do `package.json`. Existe para que a skill possa comparar o que tem instalado com o que está
 * publicado, que é a única forma de a pessoa saber que está com uma versão velha.
 */
export const VERSION: string = typeof __NF_VERSION__ === "string" ? __NF_VERSION__ : fromPackageJson()
