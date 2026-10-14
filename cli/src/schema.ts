import Joi from "joi"
import type { ErrorCode } from "./types"

/**
 * Validação de *forma* da chave DANFE. Não toca a rede: as três falhas que saem daqui são as
 * únicas que o contrato garante nunca gerarem tráfego para o SEFAZ (garantia 5). `NOT_FOUND`
 * depende da resposta do SEFAZ e por isso fica fora do schema.
 */
export namespace Schemas {

    /**
     * O schema carrega o próprio código de erro como mensagem de cada regra. Joi aborta na
     * primeira falha e devolve só uma mensagem, então rótulo por regra é o que permite distinguir
     * os três códigos do contrato — em particular os dois `.pattern()`, que compartilham o mesmo
     * tipo de erro (`string.pattern.base`) e seriam indistinguíveis sem isso.
     *
     * A ordem das regras define a precedência: tamanho, depois formato, depois UF.
     */
    export const Danfe = Joi.string()
        .length(44).message("INVALID_LENGTH")
        .pattern(/^[0-9]+$/).message("INVALID_FORMAT")
        .pattern(/^43/).message("UNSUPPORTED_UF")
        .required()
        .messages({
            "string.empty": "INVALID_LENGTH",
            "any.required": "INVALID_LENGTH",
            "string.base": "INVALID_FORMAT",
        })
}

const FORMAT_CODES: readonly ErrorCode[] = ["INVALID_LENGTH", "INVALID_FORMAT", "UNSUPPORTED_UF"]

/**
 * Devolve o código de erro de formato da chave, ou `undefined` quando ela é bem formada.
 * Bem formada não quer dizer existente — só que vale a pena gastar uma requisição com ela.
 */
export function validateDanfe(danfe: string): ErrorCode | undefined {
    const { error } = Schemas.Danfe.validate(danfe)

    if (!error) {
        return undefined
    }

    const code = error.details[0]?.message as ErrorCode | undefined

    // Rede de segurança: uma regra futura sem `.message()` cairia aqui em vez de vazar o texto
    // padrão do Joi como se fosse código de erro.
    return code && FORMAT_CODES.includes(code) ? code : "INVALID_FORMAT"
}
