import { Schemas, validateDanfe } from "../../src/schema"
import { VALID_KEYS } from "../helpers/fixtures"

const VALIDA = "43251088212113025439650070000203531414448132"

describe("validateDanfe", () => {

    it.each(VALID_KEYS)("aceita a chave real %s", (danfe) => {
        expect(validateDanfe(danfe)).toBeUndefined()
    })

    it("aceita qualquer chave de 44 dígitos começando em 43", () => {
        expect(validateDanfe("43" + "0".repeat(42))).toBeUndefined()
    })

    it.each([
        ["43 caracteres", VALIDA.slice(0, 43)],
        ["45 caracteres", VALIDA + "9"],
        ["vazia", ""],
    ])("marca %s como INVALID_LENGTH", (_caso, danfe) => {
        expect(validateDanfe(danfe)).toBe("INVALID_LENGTH")
    })

    it.each([
        ["letra", VALIDA.slice(0, 43) + "X"],
        ["pontuação", VALIDA.slice(0, 43) + "."],
        ["espaço", VALIDA.slice(0, 43) + " "],
    ])("marca %s como INVALID_FORMAT", (_caso, danfe) => {
        expect(validateDanfe(danfe)).toBe("INVALID_FORMAT")
    })

    it.each(["35", "41", "42", "50"])("marca a UF %s como UNSUPPORTED_UF", (uf) => {
        expect(validateDanfe(uf + VALIDA.slice(2))).toBe("UNSUPPORTED_UF")
    })

    /**
     * A precedência fica travada aqui de propósito. O Joi aborta na primeira falha, então uma
     * chave que viola mais de uma regra produz **um** código — e qual deles é fica indefinido se
     * ninguém fixar. A ordem contratada é: tamanho, depois formato, depois UF.
     */
    describe("precedência entre os códigos", () => {

        it("chave curta e não numérica → INVALID_LENGTH", () => {
            expect(validateDanfe("abc")).toBe("INVALID_LENGTH")
        })

        it("chave curta de outra UF → INVALID_LENGTH", () => {
            expect(validateDanfe("35251088")).toBe("INVALID_LENGTH")
        })

        it("chave com 44 caracteres, de outra UF e não numérica → INVALID_FORMAT", () => {
            expect(validateDanfe("35" + "X".repeat(42))).toBe("INVALID_FORMAT")
        })
    })

    it("não lança com entrada fora do tipo", () => {
        expect(() => validateDanfe(undefined as unknown as string)).not.toThrow()
        expect(validateDanfe(undefined as unknown as string)).toBe("INVALID_LENGTH")
        expect(validateDanfe(12345 as unknown as string)).toBe("INVALID_FORMAT")
    })

    it("expõe o schema para quem precisar validar direto", () => {
        expect(Schemas.Danfe.validate(VALIDA).error).toBeUndefined()
    })
})
