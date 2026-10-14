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

/**
 * Ramo do estabelecimento, lista fechada. A tabela de CNAE para ramo está em
 * [segment.ts](segment.ts); a lista é fechada pelo mesmo motivo da taxonomia de itens — sem ela,
 * agregado nenhum é comparável entre execuções.
 */
export type Segment =
    | "Supermercado"
    | "Loja de conveniência"
    | "Padaria e doces"
    | "Açougue e peixaria"
    | "Hortifrúti"
    | "Bebidas"
    | "Alimentos especializados"
    | "Restaurante"
    | "Farmácia"
    | "Saúde"
    | "Cosméticos e higiene"
    | "Combustível e gás"
    | "Loja de departamento"
    | "Vestuário e calçados"
    | "Material de construção"
    | "Eletrônicos e eletrodomésticos"
    | "Móveis e utilidades domésticas"
    | "Livraria e papelaria"
    | "Esporte e lazer"
    | "Pet shop"
    | "Veículos e autopeças"
    | "Outro"

/** Atividade econômica principal declarada pelo emitente, como a Receita Federal a informa. */
export interface CnaeInfo {
    /** Subclasse com 7 dígitos, sem pontuação (ex. `"4711302"`). */
    Code: string
    Description: string
}

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
    /** CNPJ do emitente, 14 dígitos sem pontuação. */
    Cnpj: string
    /** Razão social, como impressa na nota. */
    Company: string
    /**
     * Nome fantasia do emitente, da Receita Federal. `null` quando o cadastro não tem fantasia ou
     * a consulta não foi possível — nunca invalida a nota. Para exibição, prefira este campo e
     * caia em `Company` quando for `null`.
     */
    TradeName: string | null
    /** CNAE principal, ou `null` quando a consulta de CNPJ não foi possível. */
    Cnae: CnaeInfo | null
    /**
     * Ramo derivado do `Cnae`. `null` significa *sem CNAE* (consulta desligada ou indisponível);
     * `"Outro"` significa *com CNAE, fora da lista*. Não são a mesma coisa.
     */
    Segment: Segment | null
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

/**
 * Item do `scan`. Traz só o que se obtém **sem consultar o SEFAZ**: o CNPJ sai da própria chave de
 * acesso e o resto vem da consulta de CNPJ. Sem data, valor ou itens, que só existem na nota.
 */
export interface ScanSuccess {
    Danfe: string
    Valid: true
    Cnpj: string
    /** Razão social da Receita Federal — no `scan` não há a página da nota de onde lê-la. */
    Company: string | null
    TradeName: string | null
    Cnae: CnaeInfo | null
    Segment: Segment | null
    /**
     * Competência da nota (`YYYY-MM`), dos dígitos 3 a 6 da chave. Sai de graça junto do CNPJ e
     * permite filtrar por período antes de qualquer requisição.
     */
    Period: string | null
}

export type ScanItem = ScanSuccess | DanfeFailure

/** Um ramo presente no lote, com as chaves que o compõem. */
export interface ScanGroup {
    Segment: Segment | null
    /** CNPJs distintos — "quantos estabelecimentos", não quantas notas. */
    Establishments: number
    Notes: number
    /** Chaves do grupo, prontas para virar o argumento do `full`. */
    Danfes: string[]
}

export interface ScanResult {
    Total: number
    Success: number
    Failed: number
    /** Chaves válidas cujo ramo foi identificado. */
    Resolved: number
    /** Chaves válidas sem ramo — consulta de CNPJ desligada ou indisponível. */
    Unresolved: number
    Segments: ScanGroup[]
    Results: ScanItem[]
}
