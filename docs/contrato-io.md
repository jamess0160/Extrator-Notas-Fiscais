# Contrato de I/O da CLI

Entregável da [etapa 1](etapa-1-planejamento.md). É a fonte da verdade para a
[etapa 2](etapa-2-cli.md) e a [etapa 3](etapa-3-skill.md): nenhuma das duas precisa ler o código da
outra, apenas respeitar este documento.

Nomes de campo em **PascalCase**, mantendo o padrão já usado em
[ExtractNfeData.ts](../cli/src/ExtractNfeData/ExtractNfeData.ts) (`Valid`, `Company`, `Value`,
`Items`, `Description`…).

## Invocação

```bash
node cli/dist/index.js <chave1> [chave2 ...]
```

- Uma ou mais chaves DANFE de 44 dígitos, posicionais.
- Sem flags obrigatórias.
- Nenhum argumento → erro de uso (ver exit codes).

## Canais de saída

| Canal | Conteúdo |
|-------|----------|
| **stdout** | Exclusivamente o JSON de resultado, um único documento, nada além dele |
| **stderr** | Progresso, avisos e diagnóstico, em texto livre |

Essa separação é obrigatória: a skill faz `JSON.parse` do stdout. Qualquer `console.log` de
depuração que escape para o stdout quebra a skill. Logs vão para `console.error`.

## Saída do `full` (stdout)

```json
{
  "Total": 3,
  "Success": 1,
  "Failed": 2,
  "Results": [
    {
      "Danfe": "43251088212113025439650070000203531414448132",
      "Valid": true,
      "Cnpj": "88212113025439",
      "Company": "COMERCIO DE MEDICAMENTOS BRAIR LTDA",
      "TradeName": null,
      "Cnae": null,
      "Segment": null,
      "Date": "2025-10-31T12:56:53",
      "Value": 19.9,
      "Items": [
        {
          "Description": "ARROZ TIPO 1 5KG",
          "Quantity": 2,
          "UN": "UN",
          "UnityValue": 24.9,
          "TotalValue": 49.8
        }
      ]
    },
    {
      "Danfe": "43251088212113025439650070000203531414448133",
      "Valid": false,
      "Error": { "Code": "NOT_FOUND", "Message": "DANFE não encontrada" }
    },
    {
      "Danfe": "35251088212113025439650070000203531414448134",
      "Valid": false,
      "Error": { "Code": "UNSUPPORTED_UF", "Message": "Chave da UF 35; apenas RS (43) é suportado" }
    }
  ]
}
```

### Envelope

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `Total` | number | Quantidade de chaves **únicas** processadas (ver D6) |
| `Success` | number | Itens com `Valid: true` |
| `Failed` | number | Itens com `Valid: false` |
| `Results` | array | Um item por chave única, na ordem em que apareceram no `argv` |

### Item de `Results`

União discriminada por `Valid`, como o tipo atual do código. Quem consome deve estreitar por
`Valid` antes de ler os demais campos.

`Valid: true` → `Danfe`, `Cnpj` (string), `Company` (string), `TradeName` (string ou `null`),
`Cnae` (objeto ou `null`), `Segment` (string ou `null`), `Date` (string), `Value` (number),
`Items` (array).
`Valid: false` → `Danfe`, `Error` com `Code` e `Message`.

### Identificação do emitente

| Campo | Origem | Observação |
|-------|--------|------------|
| `Cnpj` | cabeçalho da página, com a chave de acesso como garantia | 14 dígitos, sem pontuação |
| `Company` | cabeçalho da página | Razão social, como impressa na nota |
| `TradeName` | Receita Federal, por CNPJ | Nome fantasia (ex. `"MINI KALZONE"`), ou `null` |
| `Cnae` | Receita Federal, por CNPJ | `{ "Code": "4711302", "Description": "…" }`, ou `null` |
| `Segment` | derivado de `Cnae.Code` | Ramo da lista fechada abaixo, ou `null` |

`Cnpj` nunca falta: além de estar impresso na nota, ele é parte da chave de acesso — os dígitos 7 a
20 (`UF(2) AAMM(4) CNPJ(14) …`). Quando o cabeçalho muda, a derivação pela chave assume, e o campo
não vira motivo de `PARSE_ERROR`.

No exemplo acima o campo está `null` de propósito: esse CNPJ é um caso real em que a consulta não
devolve fantasia.

`TradeName` é **`null` em dois casos distintos e indistinguíveis no JSON**: o cadastro não tem nome
fantasia (comum em LTDA) ou a consulta não foi possível. Em ambos, a nota continua `Valid: true` —
nome fantasia é dado de conveniência, e derrubar a consulta de uma nota fiscal porque um serviço de
terceiros está fora do ar seria trocar o essencial pelo acessório.

Para exibição, prefira `TradeName` e caia em `Company`. Essa é a única regra de nome que a skill
precisa.

> A consulta de CNPJ é o **segundo** endereço externo que a CLI toca, e o único que não é o SEFAZ.
> Pode ser desligada com `CNPJ_LOOKUP=off`, e aí `TradeName`, `Cnae` e `Segment` vêm sempre `null`.

### Ramo do estabelecimento

`Cnae` é a atividade principal declarada pelo emitente, como a Receita Federal a informa — passagem
crua, sem interpretação. `Segment` é o ramo derivado dela por tabela, numa **lista fechada**:

`Supermercado`, `Loja de conveniência`, `Padaria e doces`, `Açougue e peixaria`, `Hortifrúti`,
`Bebidas`, `Alimentos especializados`, `Restaurante`, `Farmácia`, `Saúde`, `Cosméticos e higiene`,
`Combustível e gás`, `Loja de departamento`, `Vestuário e calçados`, `Material de construção`,
`Eletrônicos e eletrodomésticos`, `Móveis e utilidades domésticas`, `Livraria e papelaria`,
`Esporte e lazer`, `Pet shop`, `Veículos e autopeças`, `Outro`.

A tabela está em [segment.ts](../cli/src/segment.ts) e os códigos vêm da lista oficial do IBGE. O
mapeamento fica na CLI, e não na skill, porque não há semântica a interpretar: `5611203` é
lanchonete por definição da tabela, não por juízo sobre um texto. Isso é o oposto da categorização
de itens (ver [D10](analise-financeira.md)), que é semântica e fica na skill.

**`null` e `"Outro"` não são a mesma coisa**, e a skill depende da diferença:

| Valor | Significa |
|-------|-----------|
| `null` | sem CNAE — consulta desligada ou indisponível. Pode ser tentado de novo |
| `"Outro"` | com CNAE, ramo fora da lista. Não há o que tentar |

Classes CNAE distintas caem no mesmo ramo de propósito: `4711` (hipermercado) e `4712`
(minimercado, mercearia, armazém) são a mesma ida ao mercado para quem olha o próprio gasto, e a
distinção segue disponível em `Cnae.Description`. No sentido contrário, uma subclasse pode
contrariar a própria classe: `4789` inteira é `Outro`, mas `4789-0/04` é `Pet shop`.

`Date` é a **data de emissão da nota**, em ISO 8601 local (`YYYY-MM-DDTHH:MM:SS`), convertida do
`DD/MM/YYYY HH:MM:SS` da página. Sem offset de fuso: a página não informa o fuso, e cravar `-03:00`
seria inventar informação. Quem precisar de fuso deve assumir horário de Brasília por conta própria.

Não confundir com a *data da consulta*, que também aparece na página do SEFAZ e não entra no
contrato. Ver [etapa 2.4](etapa-2-cli.md) para a armadilha de extração.

`Value` vem da **soma das linhas de pagamento** sob `FORMA PAGAMENTO`, não de um campo "total" da
página. Valores monetários são `number` já convertidos de pt-BR (`1.234,56` → `1234.56`).

### Códigos de erro

| `Code` | Quando | Requisição ao SEFAZ? |
|--------|--------|----------------------|
| `INVALID_LENGTH` | A chave não tem 44 caracteres | não |
| `INVALID_FORMAT` | A chave tem caracteres não numéricos | não |
| `UNSUPPORTED_UF` | Os 2 primeiros dígitos não são `43` | não |
| `NOT_FOUND` | O SEFAZ respondeu que o documento não existe na base | sim |
| `FETCH_ERROR` | Falha de rede, timeout ou HTTP não-2xx após o retry | sim (tentada) |
| `PARSE_ERROR` | A resposta veio, mas a extração falhou (HTML mudou, campo ausente) | sim |

As três primeiras são validadas **antes** de qualquer chamada de rede. `Message` é texto em pt-BR
destinado ao usuário final; `Code` é o que a skill e os testes devem usar para decidir
comportamento.

## Saída do `scan`

Mesmas convenções do `full` — PascalCase, stdout só com JSON, união discriminada por `Valid` — com
um envelope próprio:

```json
{
  "Total": 5,
  "Success": 5,
  "Failed": 0,
  "Resolved": 4,
  "Unresolved": 1,
  "Segments": [
    { "Segment": "Supermercado", "Establishments": 2, "Notes": 3,
      "Danfes": ["4326…", "4326…", "4326…"] },
    { "Segment": null, "Establishments": 1, "Notes": 1, "Danfes": ["4325…"] }
  ],
  "Results": [
    { "Danfe": "4326…", "Valid": true, "Cnpj": "11578660000170",
      "Company": "BPR COMERCIO DE ALIMENTOS LTDA", "TradeName": "MINI KALZONE",
      "Cnae": { "Code": "5611203", "Description": "Lanchonetes, casas de chá, de sucos e similares" },
      "Segment": "Restaurante", "Period": "2026-10" }
  ]
}
```

| Campo | Descrição |
|-------|-----------|
| `Resolved` | Chaves válidas com ramo identificado |
| `Unresolved` | Chaves válidas sem ramo. `Resolved + Unresolved === Success` |
| `Segments` | Um grupo por ramo presente, ordenado por `Notes` decrescente, com o grupo `null` por último |
| `Establishments` | CNPJs distintos do grupo — *quantos estabelecimentos*, não quantas notas |
| `Danfes` | As chaves do grupo, prontas para virar o argumento do `full` |

No item de `Results`, `Company` vem do **cadastro**, não da nota: no `scan` não existe a página de
onde lê-la, e por isso o campo é `string | null` aqui e `string` no `full`. Não há `Date`, `Value`
nem `Items` — esses só existem na nota.

`Period` é a competência (`YYYY-MM`) dos dígitos 3 a 6 da chave, que **são** o `AAMM` da emissão.
Sai de graça junto do CNPJ e permite filtrar por período antes de qualquer requisição. Não
substitui `Date`, que tem dia e hora.

### O que o `scan` não sabe

Como ele não fala com o SEFAZ, **nunca** produz `NOT_FOUND`, `FETCH_ERROR` nem `PARSE_ERROR`: os
únicos erros possíveis são os três de validação de chave, todos offline. Em troca, ele também não
sabe se a nota existe na base — uma chave que o `scan` classificou pode voltar `NOT_FOUND` no
`full`, e isso não é inconsistência entre os dois comandos.

## Exit codes

| Código | Significado |
|--------|-------------|
| `0` | A CLI emitiu um JSON válido — **inclusive com falhas parciais ou totais por chave** |
| `1` | Erro de uso (nenhuma chave) ou falha irrecuperável antes de emitir o JSON |

Falha parcial não tem exit code próprio de propósito: o JSON já carrega `Failed` e o `Error.Code`
de cada chave, e um terceiro código apenas duplicaria essa informação em dois lugares que podem
divergir. A regra para a skill é: `0` → parseie o JSON; `1` → trate como falha da ferramenta e
mostre o stderr.

## Garantias

1. Um item em `Results` para cada chave única recebida — nunca menos.
2. A ordem de `Results` segue a ordem de primeira aparição no `argv`.
3. `Total === Results.length` e `Success + Failed === Total`.
4. Com exit code `0`, o stdout é sempre JSON parseável.
5. Nenhuma chave inválida por formato, tamanho ou UF gera tráfego para o SEFAZ.
6. O `scan` não gera tráfego para o SEFAZ em nenhuma circunstância.
7. O `scan` consulta cadastro **uma vez por CNPJ distinto**, não uma vez por chave.
