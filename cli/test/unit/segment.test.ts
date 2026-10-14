import { normalizeCnaeCode, segmentFromCnae } from "../../src/segment"

describe("normalizeCnaeCode", () => {

    it("aceita a subclasse de 7 dígitos como ela vem", () => {
        expect(normalizeCnaeCode("4711302")).toBe("4711302")
        expect(normalizeCnaeCode(4711302)).toBe("4711302")
    })

    it("tira a pontuação da forma impressa", () => {
        expect(normalizeCnaeCode("47.11-3-02")).toBe("4711302")
    })

    /**
     * A armadilha que justifica o `padStart`: a BrasilAPI devolve o código como **número**, e as
     * divisões 01 a 09 existem. Sem o zero à esquerda o prefixo lido seria `1113` em vez de
     * `0111` — ou seja, o ramo de outra atividade completamente diferente.
     */
    it("recupera o zero à esquerda que o JSON come ao tratar o código como número", () => {
        expect(normalizeCnaeCode(111301)).toBe("0111301")
    })

    it("recusa o que não tem a granularidade de subclasse", () => {
        expect(normalizeCnaeCode("4711")).toBeUndefined()
        expect(normalizeCnaeCode("47113")).toBeUndefined()
        expect(normalizeCnaeCode("47113021")).toBeUndefined()
        expect(normalizeCnaeCode("")).toBeUndefined()
        expect(normalizeCnaeCode(null)).toBeUndefined()
        expect(normalizeCnaeCode(undefined)).toBeUndefined()
    })
})

describe("segmentFromCnae", () => {

    it("classifica os CNAEs reais das fixtures", () => {
        expect(segmentFromCnae(4711302)).toBe("Supermercado")
        expect(segmentFromCnae(5611203)).toBe("Restaurante")
    })

    it("junta no mesmo ramo classes que são a mesma compra", () => {
        // 4711 é hipermercado e 4712 é minimercado/mercearia/armazém: classes distintas na tabela
        // do IBGE, a mesma ida ao mercado para quem olha o próprio gasto.
        expect(segmentFromCnae(4711302)).toBe(segmentFromCnae(4712100))
    })

    it("trata restaurante, lanchonete e bar como um ramo só", () => {
        expect(segmentFromCnae(5611201)).toBe("Restaurante")
        expect(segmentFromCnae(5611203)).toBe("Restaurante")
        expect(segmentFromCnae(5611205)).toBe("Restaurante")
    })

    /**
     * `4789` é a classe-lixo do varejo ("outros produtos novos não especificados"), então a classe
     * inteira cai em `Outro`. Mas a subclasse `4789-0/04` é pet shop, que é gasto recorrente e
     * perfeitamente identificável — por isso a tabela de subclasse vem antes da de classe.
     */
    it("deixa a subclasse contrariar a própria classe", () => {
        expect(segmentFromCnae(4789004)).toBe("Pet shop")
        expect(segmentFromCnae(4789099)).toBe("Outro")
        expect(segmentFromCnae(4729602)).toBe("Loja de conveniência")
        expect(segmentFromCnae(4729699)).toBe("Alimentos especializados")
    })

    it("devolve Outro para CNAE fora da lista", () => {
        // Cultivo de arroz: existe na tabela do IBGE e nenhum ramo de varejo o cobre.
        expect(segmentFromCnae("0111301")).toBe("Outro")
    })

    /**
     * A distinção de que a skill depende: `null` é *não consultado*, `"Outro"` é *consultado e
     * fora da lista*. Confundir os dois faria o fluxo de filtro tratar uma indisponibilidade
     * temporária como classificação definitiva.
     */
    it("separa ausência de CNAE de ramo desconhecido", () => {
        expect(segmentFromCnae(null)).toBeNull()
        expect(segmentFromCnae(undefined)).toBeNull()
        expect(segmentFromCnae("")).toBeNull()
        expect(segmentFromCnae("4789099")).toBe("Outro")
    })
})
