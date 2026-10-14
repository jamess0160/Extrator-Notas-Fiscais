/** CNPJ como 14 dígitos, sem pontuação — a forma que as APIs esperam. */
export function normalizeCnpj(raw: string): string | undefined {
    const digits = raw.replace(/\D/g, "")

    return digits.length === 14 ? digits : undefined
}

/**
 * Extrai o CNPJ do emitente da própria chave de acesso.
 *
 * Não é adivinhação: o layout da chave da NF-e é
 * `UF(2) AAMM(4) CNPJ(14) modelo(2) série(3) número(9) tipoEmissão(1) código(8) DV(1)`, então os
 * dígitos 7 a 20 **são** o CNPJ. Serve de rede de segurança para quando a página mudar de
 * estrutura: o CNPJ continua disponível sem depender de scraping.
 */
export function cnpjFromDanfe(danfe: string): string | undefined {
    return normalizeCnpj(danfe.slice(6, 20))
}

export function formatCnpj(cnpj: string): string {
    const digits = normalizeCnpj(cnpj)

    if (!digits) {
        return cnpj
    }

    return digits.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5")
}
