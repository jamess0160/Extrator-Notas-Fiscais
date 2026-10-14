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

## Saída (stdout)

```json
{
  "Total": 3,
  "Success": 1,
  "Failed": 2,
  "Results": [
    {
      "Danfe": "43251088212113025439650070000203531414448132",
      "Valid": true,
      "Company": "COMERCIO DE MEDICAMENTOS BRAIR LTDA",
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

`Valid: true` → `Danfe`, `Company` (string), `Date` (string), `Value` (number), `Items` (array).
`Valid: false` → `Danfe`, `Error` com `Code` e `Message`.

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
