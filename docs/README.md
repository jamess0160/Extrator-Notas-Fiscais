# Documentação — Extrator de Notas Fiscais

Skill de consulta de NFC-e. O usuário invoca a skill com `/` passando vários códigos DANFE; a
skill chama a CLI deste repositório uma única vez com todos os códigos, e a CLI devolve um JSON
com o resultado de cada um.

```
usuário → /skill <chave1> <chave2> ...  →  skill.md  →  node cli/dist/index.js <chaves...>  →  JSON
```

## Etapas

| # | Etapa | Doc | Status |
|---|-------|-----|--------|
| 1 | Planejamento | [etapa-1-planejamento.md](etapa-1-planejamento.md) | em andamento |
| 2 | Desenvolvimento da CLI | [etapa-2-cli.md](etapa-2-cli.md) | não iniciada |
| 3 | Desenvolvimento da Skill | [etapa-3-skill.md](etapa-3-skill.md) | não iniciada |
| 4 | Testes e validações | [etapa-4-testes.md](etapa-4-testes.md) | não iniciada |

O produto da etapa 1 é o [contrato de I/O](contrato-io.md) — o documento que as etapas 2 e 3
consomem. Enquanto ele estiver fechado, CLI e Skill podem ser desenvolvidas em paralelo, porque
nenhuma das duas precisa ler o código da outra.

## Estado atual do repositório

- Os extratores de HTML já funcionam: [ExtractNfeData.ts](../cli/src/ExtractNfeData/ExtractNfeData.ts),
  [GetDanfeValue.ts](../cli/src/ExtractNfeData/GetDanfeValue.ts),
  [ExtractItems.ts](../cli/src/ExtractNfeData/ExtractItems.ts).
- `ExtractNfeData.run()` aceita **um** código por chamada e o código de exemplo está fixo em
  [index.ts](../cli/src/index.ts). Não há leitura de `argv`, nem saída JSON, nem lote.
- [skill.md](../skill.md) está vazio.
- Não há testes, build script, linter nem fixtures.
