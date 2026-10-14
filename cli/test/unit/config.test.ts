import { Config } from "../../src/config"

const PRODUCAO = "https://www.sefaz.rs.gov.br/ASP/AAE_ROOT/NFE/SAT-WEB-NFE-NFC_2.asp"

/**
 * Testado sem rede de propósito: o objetivo é a resolução dos defaults, não a chamada.
 *
 * O `Config` expõe getters em vez de constantes justamente para isto — o valor é lido no uso, então
 * dá para trocar a variável no meio do teste e ver o efeito, sem reimportar o módulo.
 */
describe("Config", () => {
    const original = { ...process.env }

    afterEach(() => {
        process.env = { ...original }
    })

    it("usa o endpoint de produção quando SEFAZ_URL não está definida", () => {
        delete process.env.SEFAZ_URL

        expect(Config.SefazUrl).toBe(PRODUCAO)
    })

    it("usa o endpoint de produção quando SEFAZ_URL está vazia", () => {
        process.env.SEFAZ_URL = ""

        expect(Config.SefazUrl).toBe(PRODUCAO)
    })

    it("respeita SEFAZ_URL quando definida", () => {
        process.env.SEFAZ_URL = "http://127.0.0.1:9999/"

        expect(Config.SefazUrl).toBe("http://127.0.0.1:9999/")
    })

    it("tem defaults de timeout e concorrência", () => {
        delete process.env.SEFAZ_TIMEOUT_MS
        delete process.env.CLI_CONCURRENCY

        expect(Config.TimeoutMs).toBe(15_000)
        expect(Config.Concurrency).toBe(3)
    })

    it("aceita override numérico de timeout e concorrência", () => {
        process.env.SEFAZ_TIMEOUT_MS = "500"
        process.env.CLI_CONCURRENCY = "1"

        expect(Config.TimeoutMs).toBe(500)
        expect(Config.Concurrency).toBe(1)
    })

    it.each(["", "0", "-5", "abc"])("ignora o valor inválido %p e mantém o default", (valor) => {
        process.env.CLI_CONCURRENCY = valor

        expect(Config.Concurrency).toBe(3)
    })

    describe("consulta de CNPJ", () => {

        it("tem endpoint default e garante a barra final", () => {
            delete process.env.CNPJ_API_URL

            expect(Config.CnpjApiUrl).toBe("https://brasilapi.com.br/api/cnpj/v1/")

            process.env.CNPJ_API_URL = "http://127.0.0.1:1/cnpj"

            expect(Config.CnpjApiUrl).toBe("http://127.0.0.1:1/cnpj/")
        })

        it("vem ligada por default", () => {
            delete process.env.CNPJ_LOOKUP

            expect(Config.CnpjLookupEnabled).toBe(true)
        })

        it.each(["off", "false", "0", "no", "OFF"])("desliga com CNPJ_LOOKUP=%s", (valor) => {
            process.env.CNPJ_LOOKUP = valor

            expect(Config.CnpjLookupEnabled).toBe(false)
        })
    })
})
