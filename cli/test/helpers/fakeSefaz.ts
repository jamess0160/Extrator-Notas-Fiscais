import http from "node:http"
import { KEYS, hasFixture, readFixtureBuffer } from "./fixtures"

export type FakeMode =
    /** Serve a fixture da chave pedida; sem fixture, serve a de nota inexistente. */
    | "fixture"
    /** Erro de servidor, para o caminho de retry e `FETCH_ERROR`. */
    | "500"
    /** Responde depois de `slowMs`, para estourar o timeout do cliente. */
    | "slow"
    /** HTML cortado no meio, para o caminho de `PARSE_ERROR`. */
    | "truncated"
    /** Serve a fixture convertida para bytes latin-1, como a página declara ser. */
    | "latin1"

export interface FakeSefaz {
    readonly url: string
    /** Chaves recebidas, na ordem de chegada. O tamanho é a contagem de requisições. */
    readonly requests: readonly string[]
    /** Maior número de requisições em voo ao mesmo tempo. */
    readonly peakConcurrency: number
    mode: FakeMode
    slowMs: number
    /** Força as próximas `times` requisições a falharem com 500, independente do modo. */
    failNext(times: number): void
    reset(): void
    close(): Promise<void>
}

/**
 * Servidor que ocupa o lugar do SEFAZ nos testes.
 *
 * Preferido a mockar o `axios` porque mantém o caminho de rede real sob teste — corpo
 * form-urlencoded, headers, status, timeout e retry. Um mock de `axios` testaria o mock.
 *
 * Sobe em **porta 0** (efêmera): nunca colide com outro processo nem entre arquivos de teste, que
 * o Jest roda em paralelo.
 */
export async function startFakeSefaz(): Promise<FakeSefaz> {
    const requests: string[] = []
    const timers = new Set<NodeJS.Timeout>()

    let mode: FakeMode = "fixture"
    let slowMs = 1_000
    let failures = 0
    let inFlight = 0
    let peak = 0

    const server = http.createServer((request, response) => {
        inFlight++
        peak = Math.max(peak, inFlight)

        let body = ""
        request.on("data", (chunk) => { body += chunk })
        request.on("end", () => {
            const danfe = new URLSearchParams(body).get("chaveNFe") ?? ""
            requests.push(danfe)

            const respond = (): void => {
                inFlight--

                if (failures > 0) {
                    failures--
                    response.writeHead(500)
                    response.end("erro simulado")
                    return
                }

                if (mode === "500") {
                    response.writeHead(500)
                    response.end("erro simulado")
                    return
                }

                // Chave sem fixture recebe a fixture real de nota inexistente: o SEFAZ responde
                // **200 com uma página normal** nesse caso, então não há status de erro a simular.
                const key = hasFixture(danfe) ? danfe : KEYS.inexistente
                const page = readFixtureBuffer(key)

                const payload = mode === "truncated"
                    ? page.subarray(0, Math.floor(page.length / 2))
                    : mode === "latin1"
                        ? Buffer.from(page.toString("utf8"), "latin1")
                        : page

                // O charset anunciado é o mesmo da página real, inclusive quando os bytes são
                // UTF-8: a divergência entre declaração e conteúdo é parte do que está sob teste.
                response.writeHead(200, { "Content-Type": "text/html; charset=iso-8859-1" })
                response.end(payload)
            }

            if (mode === "slow") {
                const timer = setTimeout(() => {
                    timers.delete(timer)
                    respond()
                }, slowMs)
                timers.add(timer)
                return
            }

            respond()
        })
    })

    await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve))

    const address = server.address()

    if (address === null || typeof address === "string") {
        throw new Error("servidor falso subiu sem endereço TCP")
    }

    return {
        url: `http://127.0.0.1:${address.port}/`,
        requests,
        get peakConcurrency() { return peak },
        get mode() { return mode },
        set mode(value: FakeMode) { mode = value },
        get slowMs() { return slowMs },
        set slowMs(value: number) { slowMs = value },
        failNext(times: number) { failures = times },
        reset() {
            requests.length = 0
            peak = 0
            inFlight = 0
            failures = 0
            mode = "fixture"
        },
        async close() {
            for (const timer of timers) {
                clearTimeout(timer)
            }
            timers.clear()

            // Sem isso uma conexão em keep-alive (ou uma resposta pendente no modo `slow`) mantém
            // um handle aberto e o Jest não encerra.
            server.closeAllConnections()

            await new Promise<void>((resolve, reject) => {
                server.close((error) => error ? reject(error) : resolve())
            })
        },
    }
}

/**
 * Aponta a CLI para o servidor falso durante um teste e restaura o ambiente depois.
 *
 * Funciona porque `Config` lê `process.env` em getters, resolvendo o valor no uso.
 */
export function useFakeSefaz(fake: Pick<FakeSefaz, "url">, timeoutMs?: number): () => void {
    const previousUrl = process.env.SEFAZ_URL
    const previousTimeout = process.env.SEFAZ_TIMEOUT_MS

    process.env.SEFAZ_URL = fake.url

    if (timeoutMs !== undefined) {
        process.env.SEFAZ_TIMEOUT_MS = String(timeoutMs)
    }

    return () => {
        restore("SEFAZ_URL", previousUrl)
        restore("SEFAZ_TIMEOUT_MS", previousTimeout)
    }
}

function restore(name: string, value: string | undefined): void {
    if (value === undefined) {
        delete process.env[name]
    } else {
        process.env[name] = value
    }
}
