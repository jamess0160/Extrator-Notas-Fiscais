# Documentação — Extrator de Notas Fiscais

Skill de consulta de NFC-e. O usuário invoca a skill com `/` passando vários códigos DANFE; a
skill chama a CLI deste repositório uma única vez com todos os códigos, e a CLI devolve um JSON
com o resultado de cada um.

```
usuário → /skill <chave1> <chave2> ...
            → skill.md → node cli/dist/index.js <chaves...> → JSON (dados brutos)
            → skill categoriza os itens e produz a análise financeira → resposta ao usuário
```

A CLI entrega dados; a skill entrega leitura dos dados. A categorização de itens e a análise são da
skill, não da CLI (D10) — especificadas em [analise-financeira.md](analise-financeira.md).

## Etapas

| # | Etapa | Doc | Status |
|---|-------|-----|--------|
| 1 | Planejamento | [etapa-1-planejamento.md](etapa-1-planejamento.md) | em andamento |
| 2 | Desenvolvimento da CLI | [etapa-2-cli.md](etapa-2-cli.md) | não iniciada |
| 3 | Desenvolvimento da Skill | [etapa-3-skill.md](etapa-3-skill.md) | não iniciada |
| 4 | Testes e validações | [etapa-4-testes.md](etapa-4-testes.md) | não iniciada |

Os produtos da etapa 1 são dois documentos de especificação:
[contrato de I/O](contrato-io.md), consumido pelas etapas 2 e 3, e
[análise financeira](analise-financeira.md), consumida pela etapa 3. Enquanto os dois estiverem
fechados, CLI e Skill podem ser desenvolvidas em paralelo, porque nenhuma precisa ler o código da
outra.

## Estado atual do repositório

- Os extratores de HTML já funcionam: [ExtractNfeData.ts](../cli/src/ExtractNfeData/ExtractNfeData.ts),
  [GetDanfeValue.ts](../cli/src/ExtractNfeData/GetDanfeValue.ts),
  [ExtractItems.ts](../cli/src/ExtractNfeData/ExtractItems.ts).
- `ExtractNfeData.run()` aceita **um** código por chamada e o código de exemplo está fixo em
  [index.ts](../cli/src/index.ts). Não há leitura de `argv`, nem saída JSON, nem lote.
- [skill.md](../skill.md) está vazio.
- [cli/src/schema.ts](../cli/src/schema.ts) existe, mas contém apenas o namespace `Schemas` vazio —
  os schemas Joi ainda precisam ser escritos (D8).
- As fixtures de HTML **já estão** em [cli/test/fixtures/](../cli/test/fixtures/), nomeadas pela
  chave DANFE: 6 arquivos, todos do RS — 5 notas válidas (de 1 a 22 itens, supermercado e farmácia)
  e 1 de nota inexistente.
- Não há testes, build script nem linter. `joi`, `dotenv` e `jest` ainda não estão instalados.
