const NAMED_ENTITIES: Record<string, string> = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"',
    apos: "'",
    nbsp: " ",
}

/**
 * Normaliza texto vindo do `innerHTML`.
 *
 * As entidades precisam ser resolvidas aqui porque o `dom-parser` devolve o HTML cru: sem isso a
 * razão social `C &amp; A Comercio de Alimentos Ltda.` chega assim no JSON, com a entidade
 * literal. As fixtures usam apenas `&amp;` e `&nbsp;`, mas as referências numéricas custam pouco
 * para cobrir.
 *
 * O colapso de espaços trata o `&nbsp;` e a indentação do HTML, que vêm juntos no mesmo campo.
 */
export function cleanText(raw: string): string {
    return raw
        .replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z]+);/g, (match, entity: string) => {
            if (entity.startsWith("#x") || entity.startsWith("#X")) {
                return String.fromCodePoint(parseInt(entity.slice(2), 16))
            }

            if (entity.startsWith("#")) {
                return String.fromCodePoint(Number(entity.slice(1)))
            }

            return NAMED_ENTITIES[entity.toLowerCase()] ?? match
        })
        .replace(/\s+/g, " ")
        .trim()
}
