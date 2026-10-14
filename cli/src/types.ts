/**
 * Tipos do contrato de I/O (docs/contrato-io.md). Nomes em PascalCase, como no JSON de saída —
 * estes tipos *são* o formato serializado, não uma representação interna dele.
 */

export type ErrorCode =
    | "INVALID_LENGTH"
    | "INVALID_FORMAT"
    | "UNSUPPORTED_UF"
    | "NOT_FOUND"
    | "FETCH_ERROR"
    | "PARSE_ERROR"

export interface NfeItem {
    Description: string
    Quantity: number
    UN: string
    UnityValue: number
    TotalValue: number
}

export interface DanfeFailure {
    Danfe: string
    Valid: false
    Error: {
        Code: ErrorCode
        Message: string
    }
}

export interface DanfeSuccess {
    Danfe: string
    Valid: true
    Company: string
    /** Data de emissão em ISO 8601 local, sem offset: `YYYY-MM-DDTHH:MM:SS`. */
    Date: string
    Value: number
    Items: NfeItem[]
}

/** União discriminada por `Valid`. Estreite por `Valid` antes de ler os demais campos. */
export type DanfeResult = DanfeSuccess | DanfeFailure

export interface BatchResult {
    Total: number
    Success: number
    Failed: number
    Results: DanfeResult[]
}
