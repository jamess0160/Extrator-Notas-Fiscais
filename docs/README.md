# Documentação — Extrator de Notas Fiscais

Skill de consulta de NFC-e. O usuário invoca a skill com `/` passando vários códigos DANFE; a
skill chama a CLI deste repositório uma única vez com todos os códigos, e a CLI devolve um JSON
com o resultado de cada um.

```
usuário → /skill <chave1> <chave2> ...
            → SKILL.md → node cli/dist/index.js <chaves...> → JSON (dados brutos)
            → skill categoriza os itens e produz a análise financeira → resposta ao usuário
```

A CLI entrega dados; a skill entrega leitura dos dados. A categorização de itens e a análise são da
skill, não da CLI (D10) — especificadas em [analise-financeira.md](analise-financeira.md).

## Etapas

| # | Etapa | Doc | Status |
|---|-------|-----|--------|
| 1 | Planejamento | [etapa-1-planejamento.md](etapa-1-planejamento.md) | concluída |
| 2 | Desenvolvimento da CLI | [etapa-2-cli.md](etapa-2-cli.md) | concluída |
| 3 | Desenvolvimento da Skill | [etapa-3-skill.md](etapa-3-skill.md) | escrita, validação em uso pendente |
| 4 | Testes e validações | [etapa-4-testes.md](etapa-4-testes.md) | não iniciada |

Os produtos da etapa 1 são dois documentos de especificação:
[contrato de I/O](contrato-io.md), consumido pelas etapas 2 e 3, e
[análise financeira](analise-financeira.md), consumida pela etapa 3. Enquanto os dois estiverem
fechados, CLI e Skill podem ser desenvolvidas em paralelo, porque nenhuma precisa ler o código da
outra.

## Estado atual do repositório

A CLI implementa o [contrato de I/O](contrato-io.md): lê as chaves do `argv`, valida com Joi antes
de qualquer rede, consulta em lote com concorrência 3 e escreve o envelope JSON no stdout.

Módulos em [cli/src/](../cli/src/):

| Arquivo | Papel |
|---------|-------|
| [index.ts](../cli/src/index.ts) | `argv`, `dotenv`, uso/exit 1, única escrita em stdout |
| [BatchRunner.ts](../cli/src/BatchRunner.ts) | dedupe, concorrência, envelope, isolamento de falha |
| [ExtractNfeData/ExtractNfeData.ts](../cli/src/ExtractNfeData/ExtractNfeData.ts) | valida → busca → extrai; `run` nunca lança |
| [SefazClient.ts](../cli/src/SefazClient.ts) | POST, timeout, 1 retry, decodificação |
| [schema.ts](../cli/src/schema.ts) | schema Joi da chave e mapeamento para os códigos de erro |
| [types.ts](../cli/src/types.ts) | tipos do contrato (substituíram o `CliTypes` obsoleto) |
| [errors.ts](../cli/src/errors.ts) · [text.ts](../cli/src/text.ts) · [number.ts](../cli/src/number.ts) · [decode.ts](../cli/src/decode.ts) · [config.ts](../cli/src/config.ts) | mensagens pt-BR, entidades HTML, números pt-BR, charset, env |

Extratores: [GetDanfeCompany.ts](../cli/src/ExtractNfeData/GetDanfeCompany.ts),
[GetDanfeDate.ts](../cli/src/ExtractNfeData/GetDanfeDate.ts),
[GetDanfeValue.ts](../cli/src/ExtractNfeData/GetDanfeValue.ts),
[ExtractItems.ts](../cli/src/ExtractNfeData/ExtractItems.ts).

A skill está em [.claude/skills/notas-fiscais/SKILL.md](../.claude/skills/notas-fiscais/SKILL.md),
invocável como `/notas-fiscais`; o `skill.md` da raiz é só um ponteiro para ela.

- As fixtures de HTML estão em [cli/test/fixtures/](../cli/test/fixtures/), nomeadas pela chave
  DANFE: 6 arquivos, todos do RS — 5 notas válidas (de 1 a 22 itens, supermercado e farmácia) e 1
  de nota inexistente.
- `joi` e `dotenv` instalados; scripts `build`, `build:watch` e `start` no `package.json`.
- **Ainda não há suíte de testes nem linter.** `npm test` aponta para `jest`, que só é instalado na
  [etapa 4](etapa-4-testes.md) — até lá o comando falha por falta da dependência. A validação feita
  até agora foi manual, contra um servidor HTTP local servindo as fixtures.
