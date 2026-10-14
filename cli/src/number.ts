import { cleanText } from "./text"

/**
 * Converte número em formato pt-BR (`1.234,56`) para `number`.
 *
 * O `replace` global no separador de milhar não é zelo gratuito: `"1.234.567,89".replace(".", "")`
 * troca apenas a primeira ocorrência e devolve `1234.567,89`, que vira `NaN`.
 */
export function parsePtBrNumber(raw: string): number {
    // Passa por `cleanText` porque as células numéricas da página podem trazer `&nbsp;` e
    // indentação junto do número.
    const normalized = cleanText(raw).replace(/\./g, "").replace(",", ".")

    // Célula vazia precisa falhar: `Number("")` é `0`, e um zero silencioso num campo de valor
    // passa por resultado válido em vez de denunciar que a página mudou.
    if (normalized === "") {
        throw new Error("Valor numérico ausente na página")
    }

    const parsed = Number(normalized)

    if (!Number.isFinite(parsed)) {
        throw new Error(`Valor numérico inesperado na página: "${raw}"`)
    }

    return parsed
}
