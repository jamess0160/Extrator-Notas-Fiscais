import type { DanfeFailure, ErrorCode } from "./types"

/**
 * Mensagens em pt-BR, destinadas ao usuário final. Quem decide comportamento (skill e testes) usa
 * o `Code`; o texto é livre para mudar.
 */
const MESSAGES: Record<ErrorCode, string> = {
    INVALID_LENGTH: "A chave de acesso deve ter 44 dígitos",
    INVALID_FORMAT: "A chave de acesso deve conter apenas dígitos",
    UNSUPPORTED_UF: "Apenas notas do RS (UF 43) são suportadas",
    NOT_FOUND: "DANFE não encontrada na base do SEFAZ",
    FETCH_ERROR: "Falha ao consultar o SEFAZ",
    PARSE_ERROR: "A página do SEFAZ respondeu, mas os dados não puderam ser extraídos",
}

export function describeError(code: ErrorCode, danfe: string, detail?: string): string {
    if (code === "UNSUPPORTED_UF") {
        return `Chave da UF ${danfe.slice(0, 2)}; apenas RS (43) é suportado`
    }

    return detail ? `${MESSAGES[code]}: ${detail}` : MESSAGES[code]
}

export function failure(danfe: string, code: ErrorCode, detail?: string): DanfeFailure {
    return {
        Danfe: danfe,
        Valid: false,
        Error: {
            Code: code,
            Message: describeError(code, danfe, detail),
        },
    }
}
