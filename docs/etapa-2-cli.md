# Etapa 2 — Desenvolvimento da CLI

Implementa o [contrato de I/O](contrato-io.md). Os extratores de HTML já existem e funcionam; o
trabalho aqui é tudo em volta deles: entrada, validação, lote, erros e saída.

## Ponto de partida

`ExtractNfeData.run()` hoje faz a requisição, valida e extrai numa só função, e retorna
`DanfeData | DanfeError`. Dois problemas a corrigir no caminho:

1. **A validação acontece depois do `await`.** `isDanfeValid` é chamado com a resposta já em mão,
   então uma chave com tamanho errado hoje gera uma requisição inútil ao SEFAZ. O contrato exige o
   contrário (garantia 5).
2. **`Company` pode ser `undefined`.** A leitura é
   `getElementsByClassName("NFCCabecalho_SubTitulo")[0]?.innerHTML`, tipada como `string`. Quando a
   classe não existir no HTML, o campo sai `undefined` sem erro. Isso deve virar `PARSE_ERROR`.

## Tarefas

### 2.1 — Entrada e validação
- Ler as chaves de `process.argv.slice(2)`.
- Nenhuma chave → mensagem de uso no stderr e `exit 1`.
- Deduplicar preservando a ordem de primeira aparição (D6).
- Validador puro, sem rede, retornando `INVALID_LENGTH` / `INVALID_FORMAT` / `UNSUPPORTED_UF`.
  Função separada e sem I/O, para ser testável direto na etapa 4.

### 2.2 — Refatorar `ExtractNfeData`
- Validar **antes** de buscar.
- Separar busca (`getDanfeData`) de extração, para que a extração possa ser testada com fixture sem
  tocar a rede. Esse é o pré-requisito de toda a etapa 4.
- Trocar o `DanfeError` atual (`Message` solto) pelo `Error: { Code, Message }` do contrato.
- Envolver a extração em try/catch → `PARSE_ERROR`, incluindo o caso de `Company` ausente.
- Timeout de 15s no axios e 1 retry em erro de rede/5xx (D5).

### 2.3 — Executor de lote
- Processa a lista com concorrência máxima 3 (D5).
- Nunca propaga exceção de uma chave para o lote (D4): toda falha vira item `Valid: false`.
- Monta o envelope `Total` / `Success` / `Failed` / `Results`.
- Progresso no **stderr** (ex. `[2/10] consultando 4325...`), nunca no stdout.

### 2.4 — Saída
- `process.stdout.write(JSON.stringify(resultado))` como única escrita em stdout.
- Varrer o código por `console.log` remanescente — há um em
  [index.ts](../cli/src/index.ts) hoje, que precisa sair.

### 2.5 — Captura de fixtures
Ainda nesta etapa, não na 4. Um script que recebe uma chave real, salva o HTML bruto da resposta em
`cli/test/fixtures/<chave>.html` e não faz mais nada.

Sem isso, os testes da etapa 4 precisariam bater no SEFAZ ao vivo: lentos, intermitentes, e falhando
por motivos que não são o código. Capturar enquanto se desenvolve é o que torna a etapa 4 viável.

Capturar no mínimo: uma nota com múltiplos itens, uma nota com mais de uma forma de pagamento, e a
resposta de uma chave inexistente.

> As fixtures são documentos fiscais reais e contêm nome de estabelecimento e itens comprados.
> Decidir conscientemente o que entra no git; preferir notas sem dado pessoal relevante.

### 2.6 — Limpeza e scripts
- Remover a chave fixa de [index.ts](../cli/src/index.ts).
- Resolver [types.ts](../cli/src/types.ts): o namespace `CliTypes` não é importado por ninguém e usa
  nomes divergentes (`Name`, `UnitaryValue`) dos tipos realmente em uso (`Description`,
  `UnityValue`). Remover, ou reescrever como os tipos do contrato — não manter os dois.
- `package.json`: `build` (`tsc`), `start` (`node dist/index.js`), e trocar o `test` placeholder.
- `.gitignore` com `cli/dist/` e `cli/node_modules/` (D2).

## Definição de pronto

- [ ] `node dist/index.js <chave-valida>` imprime o JSON do contrato em stdout
- [ ] `node dist/index.js <valida> <inexistente> <outra-uf>` retorna 3 itens, exit `0`
- [ ] `node dist/index.js` sem argumentos → uso no stderr, exit `1`
- [ ] stdout parseável com `JSON.parse` em todos os casos de exit `0`
- [ ] nenhuma requisição disparada para chave inválida por formato/tamanho/UF
- [ ] fixtures de 2.5 commitadas
- [ ] `npx tsc` sem erro sob o `strict` atual
