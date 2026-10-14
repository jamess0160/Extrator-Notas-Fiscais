import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { CnpjCache } from "../../src/CnpjCache"
import type { CnpjInfo } from "../../src/CnpjClient"
import { silenceProgress } from "../helpers/silence"

const INFO: CnpjInfo = {
    TradeName: "MINI KALZONE",
    Company: "BPR COMERCIO DE ALIMENTOS LTDA",
    Cnae: { Code: "5611203", Description: "Lanchonetes, casas de chá, de sucos e similares" },
    Segment: "Restaurante",
}

const CNPJ = "11578660000170"

describe("CnpjCache", () => {
    silenceProgress()

    let dir: string
    let file: string

    beforeEach(() => {
        // Diretório próprio por caso: o `setupEnv` desliga o cache para a suíte inteira, e só este
        // arquivo o liga — sempre apontando para fora do `~` de quem roda os testes.
        dir = fs.mkdtempSync(path.join(os.tmpdir(), "nfe-cache-"))
        file = path.join(dir, "sub", "cnpj.json")

        process.env.CNPJ_CACHE = "on"
        process.env.CNPJ_CACHE_PATH = file
    })

    afterEach(() => {
        process.env.CNPJ_CACHE = "off"
        delete process.env.CNPJ_CACHE_PATH
        delete process.env.CNPJ_CACHE_TTL_DAYS
        fs.rmSync(dir, { recursive: true, force: true })
    })

    it("devolve o que foi gravado, numa instância nova", () => {
        new CnpjCache().set(CNPJ, INFO)

        // Instância nova de propósito: é esse o caso de uso real, já que `scan` e `full` são
        // processos distintos e nenhum estado de memória sobrevive entre eles.
        expect(new CnpjCache().get(CNPJ)).toEqual(INFO)
    })

    it("cria o diretório que faltava", () => {
        new CnpjCache().set(CNPJ, INFO)

        expect(fs.existsSync(file)).toBe(true)
    })

    it("não acha o que nunca foi gravado", () => {
        expect(new CnpjCache().get(CNPJ)).toBeUndefined()
    })

    it("ignora entrada vencida", () => {
        new CnpjCache().set(CNPJ, INFO)

        const stored = JSON.parse(fs.readFileSync(file, "utf8")) as {
            Entries: Record<string, { FetchedAt: number }>
        }

        // 40 dias atrás, contra o prazo padrão de 30.
        stored.Entries[CNPJ]!.FetchedAt = Date.now() - 40 * 24 * 60 * 60 * 1000
        fs.writeFileSync(file, JSON.stringify(stored))

        expect(new CnpjCache().get(CNPJ)).toBeUndefined()
    })

    it("respeita o prazo configurado", () => {
        process.env.CNPJ_CACHE_TTL_DAYS = "90"

        new CnpjCache().set(CNPJ, INFO)

        const stored = JSON.parse(fs.readFileSync(file, "utf8")) as {
            Entries: Record<string, { FetchedAt: number }>
        }

        stored.Entries[CNPJ]!.FetchedAt = Date.now() - 40 * 24 * 60 * 60 * 1000
        fs.writeFileSync(file, JSON.stringify(stored))

        expect(new CnpjCache().get(CNPJ)).toEqual(INFO)
    })

    it("não lê nem escreve quando desligado", () => {
        new CnpjCache().set(CNPJ, INFO)

        process.env.CNPJ_CACHE = "off"

        expect(new CnpjCache().get(CNPJ)).toBeUndefined()

        new CnpjCache().set("06348488000390", INFO)

        const stored = JSON.parse(fs.readFileSync(file, "utf8")) as { Entries: Record<string, unknown> }

        expect(Object.keys(stored.Entries)).toEqual([CNPJ])
    })

    /**
     * O cache é opcional por construção: nenhuma falha de I/O ou de formato pode custar uma
     * consulta de nota fiscal. Em todos os casos abaixo o comportamento certo é degradar para
     * "sem cache", nunca lançar.
     */
    describe("degradação", () => {

        it("sobrevive a arquivo corrompido", () => {
            fs.mkdirSync(path.dirname(file), { recursive: true })
            fs.writeFileSync(file, "{ isso nao e json")

            expect(() => new CnpjCache().get(CNPJ)).not.toThrow()
            expect(new CnpjCache().get(CNPJ)).toBeUndefined()
        })

        it("descarta arquivo de versão desconhecida em vez de interpretá-lo", () => {
            fs.mkdirSync(path.dirname(file), { recursive: true })
            fs.writeFileSync(file, JSON.stringify({
                Version: 99,
                Entries: { [CNPJ]: { FetchedAt: Date.now(), Info: { Segment: "Padaria e doces" } } },
            }))

            expect(new CnpjCache().get(CNPJ)).toBeUndefined()
        })

        it("sobrevive a caminho impossível de escrever", () => {
            process.env.CNPJ_CACHE_PATH = path.join(file, "nao", "da", "cnpj.json")
            fs.mkdirSync(path.dirname(file), { recursive: true })
            fs.writeFileSync(file, "sou um arquivo, nao um diretório")

            expect(() => new CnpjCache().set(CNPJ, INFO)).not.toThrow()
        })
    })

    /**
     * A regra que mantém o arquivo inofensivo: cadastro de CNPJ é informação pública da Receita
     * Federal; chave DANFE, valor e item são as compras de uma pessoa, vinculadas ao CPF dela.
     * Só o primeiro grupo pode encostar no disco.
     */
    it("guarda só cadastro público, nunca dado da nota", () => {
        new CnpjCache().set(CNPJ, INFO)

        const raw = fs.readFileSync(file, "utf8")
        const stored = JSON.parse(raw) as { Entries: Record<string, { Info: Record<string, unknown> }> }

        expect(Object.keys(stored.Entries)).toEqual([CNPJ])
        expect(Object.keys(stored.Entries[CNPJ]!.Info).sort())
            .toEqual(["Cnae", "Company", "Segment", "TradeName"])

        // Nenhuma chave de acesso: as de 44 dígitos das fixtures, e qualquer sequência longa.
        expect(raw).not.toMatch(/\d{20,}/)
    })
})
