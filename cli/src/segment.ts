import type { Segment } from "./types"

/**
 * Ramo do estabelecimento a partir do CNAE que a Receita Federal informa.
 *
 * **Por que isso fica na CLI e não na skill**, ao contrário da categorização de itens (D10): aqui
 * não há semântica a interpretar. `5611203` é lanchonete por definição da tabela do IBGE, não por
 * juízo sobre um texto abreviado. Sendo consulta a tabela numérica, pertence a onde pode ser
 * testada sem LLM e dá o mesmo resultado em toda execução — que é o mesmo argumento que levou a
 * fixar a taxonomia de itens.
 *
 * Os códigos vêm da lista oficial (`servicodados.ibge.gov.br/api/v2/cnae`), não de memória.
 */

/**
 * Subclasses que contrariam a própria classe e por isso vêm antes dela.
 *
 * `4789` é a classe-lixo do varejo ("outros produtos novos não especificados"), mas a subclasse
 * `4789-0/04` é pet shop — gasto recorrente e perfeitamente identificável. `4729-6/02` é loja de
 * conveniência, que fica na mesma classe de tabacaria e mercearia especializada e representa um
 * comportamento de compra diferente das duas.
 */
const POR_SUBCLASSE: Record<string, Segment> = {
    "4789004": "Pet shop",
    "4729602": "Loja de conveniência",
    "4713004": "Loja de departamento",
}

/**
 * Classe CNAE (4 primeiros dígitos da subclasse, sem o dígito verificador) para ramo.
 *
 * Classes diferentes caem no mesmo ramo de propósito: `4711` (hipermercado) e `4712` (minimercado,
 * mercearia, armazém) são a mesma ida ao mercado para quem está olhando o próprio gasto, e a
 * distinção continua disponível em `Cnae.Description` para quem precisar dela.
 */
const POR_CLASSE: Record<string, Segment> = {
    "4711": "Supermercado",
    "4712": "Supermercado",
    "4713": "Loja de departamento",
    "4721": "Padaria e doces",
    "4722": "Açougue e peixaria",
    "4723": "Bebidas",
    "4724": "Hortifrúti",
    "4729": "Alimentos especializados",
    "4731": "Combustível e gás",
    "4732": "Combustível e gás",
    "4784": "Combustível e gás",
    "4741": "Material de construção",
    "4742": "Material de construção",
    "4743": "Material de construção",
    "4744": "Material de construção",
    "4751": "Eletrônicos e eletrodomésticos",
    "4752": "Eletrônicos e eletrodomésticos",
    "4753": "Eletrônicos e eletrodomésticos",
    "4757": "Eletrônicos e eletrodomésticos",
    "4754": "Móveis e utilidades domésticas",
    "4755": "Móveis e utilidades domésticas",
    "4759": "Móveis e utilidades domésticas",
    "4761": "Livraria e papelaria",
    "4762": "Livraria e papelaria",
    "4763": "Esporte e lazer",
    "4771": "Farmácia",
    "4772": "Cosméticos e higiene",
    "4773": "Saúde",
    "4774": "Saúde",
    "4781": "Vestuário e calçados",
    "4782": "Vestuário e calçados",
    "4783": "Vestuário e calçados",
    "4789": "Outro",
    "4520": "Veículos e autopeças",
    "4530": "Veículos e autopeças",
    "4541": "Veículos e autopeças",
    "5611": "Restaurante",
    "5612": "Restaurante",
    "5620": "Restaurante",
}

/**
 * Normaliza o código do CNAE para os 7 dígitos da subclasse.
 *
 * O `padStart` não é enfeite: a BrasilAPI devolve o código como **número**, e as divisões 01 a 09
 * existem — `0111301` chega como `111301`. Sem o zero à esquerda, o prefixo lido seria `1113` em
 * vez de `0111`, ou seja, o ramo errado.
 *
 * Códigos com menos de 6 dígitos não são subclasse (podem ser classe ou grupo, em outra
 * granularidade) e são rejeitados em vez de adivinhados.
 */
export function normalizeCnaeCode(raw: string | number | null | undefined): string | undefined {
    const digits = String(raw ?? "").replace(/\D/g, "")

    if (digits.length < 6 || digits.length > 7) {
        return undefined
    }

    return digits.padStart(7, "0")
}

/**
 * Ramo do CNAE, ou `null` quando não houve CNAE.
 *
 * A distinção entre `null` e `"Outro"` é de propósito e a skill depende dela: `null` é *não
 * consultado ou indisponível*, `"Outro"` é *consultado, e o ramo não está na lista*. No primeiro
 * caso ainda se pode tentar de novo; no segundo, não há o que tentar.
 */
export function segmentFromCnae(raw: string | number | null | undefined): Segment | null {
    const code = normalizeCnaeCode(raw)

    if (!code) {
        return null
    }

    return POR_SUBCLASSE[code] ?? POR_CLASSE[code.slice(0, 4)] ?? "Outro"
}
