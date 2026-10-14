import os from "node:os"
import path from "node:path"

const DEFAULT_SEFAZ_URL = "https://www.sefaz.rs.gov.br/ASP/AAE_ROOT/NFE/SAT-WEB-NFE-NFC_2.asp"

/**
 * Consulta de nome fantasia por CNPJ. A BrasilAPI serve os dados abertos da Receita Federal, sem
 * cadastro nem chave. É um serviço de terceiros e o segundo endereço externo que a CLI toca — por
 * isso a consulta é desligável, e falha nela nunca invalida a nota.
 */
const DEFAULT_CNPJ_API_URL = "https://brasilapi.com.br/api/cnpj/v1/"

const DEFAULT_CACHE_TTL_DAYS = 30

function numberFromEnv(name: string, fallback: number): number {
    const parsed = Number(process.env[name])
    return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback
}

/**
 * Lido via getters de propósito: o valor é resolvido no uso, não na importação do módulo. Isso
 * evita depender da ordem em que o `dotenv` roda e permite que os testes troquem `SEFAZ_URL`
 * (apontando para o servidor falso) entre casos.
 *
 * Todos têm default de produção — a CLI precisa funcionar sem `.env` na máquina do usuário.
 */
export const Config = {
    get SefazUrl(): string {
        return process.env.SEFAZ_URL || DEFAULT_SEFAZ_URL
    },
    get TimeoutMs(): number {
        return numberFromEnv("SEFAZ_TIMEOUT_MS", 15_000)
    },
    get Concurrency(): number {
        return numberFromEnv("CLI_CONCURRENCY", 3)
    },
    get CnpjApiUrl(): string {
        const url = process.env.CNPJ_API_URL || DEFAULT_CNPJ_API_URL

        return url.endsWith("/") ? url : `${url}/`
    },
    /** `CNPJ_LOOKUP=off` (ou `false`/`0`) desliga a consulta e mantém só a razão social. */
    get CnpjLookupEnabled(): boolean {
        return !isOff(process.env.CNPJ_LOOKUP)
    },
    /**
     * `CNPJ_CACHE=off` desliga o cache em disco.
     *
     * O cache existe porque `scan` e `full` são processos separados: sem ele, decidir no meio do
     * fluxo custaria duas consultas por CNPJ em vez de uma. Não é otimização, é o que torna o
     * fluxo de dois passos viável.
     */
    get CnpjCacheEnabled(): boolean {
        return !isOff(process.env.CNPJ_CACHE)
    },
    get CnpjCachePath(): string {
        return process.env.CNPJ_CACHE_PATH || path.join(os.homedir(), ".extrator-nfe", "cnpj.json")
    },
    /**
     * Prazo de validade das entradas. Nome fantasia e CNAE mudam raramente, mas *mudam* — e um
     * cache sem expiração esconderia uma correção de cadastro para sempre.
     */
    get CnpjCacheTtlMs(): number {
        return numberFromEnv("CNPJ_CACHE_TTL_DAYS", DEFAULT_CACHE_TTL_DAYS) * 24 * 60 * 60 * 1000
    },
}

function isOff(value: string | undefined): boolean {
    return ["off", "false", "0", "no"].includes((value || "").trim().toLowerCase())
}
