# Etapa 2 — Desenvolvimento da CLI

Implementa o [contrato de I/O](contrato-io.md). Os extratores de HTML já existem e funcionam; o
trabalho aqui é tudo em volta deles: entrada, validação, lote, erros e saída.

## Ponto de partida

`ExtractNfeData.run()` hoje faz a requisição, valida e extrai numa só função, e retorna
`DanfeData | DanfeError`. Três problemas a corrigir no caminho:

1. **A validação acontece depois do `await`.** `isDanfeValid` é chamado com a resposta já em mão,
   então uma chave com tamanho errado hoje gera uma requisição inútil ao SEFAZ. O contrato exige o
   contrário (garantia 5).
2. **`Company` pode ser `undefined`.** A leitura é
   `getElementsByClassName("NFCCabecalho_SubTitulo")[0]?.innerHTML`, tipada como `string`. Quando a
   classe não existir no HTML, o campo sai `undefined` sem erro. Isso deve virar `PARSE_ERROR`.
3. **A URL do SEFAZ está fixa no código** ([ExtractNfeData.ts](../cli/src/ExtractNfeData/ExtractNfeData.ts)).
   Precisa vir de variável de ambiente (D7), porque é o que permite apontar os testes para o
   servidor falso da [etapa 4](etapa-4-testes.md).

## Tarefas

### 2.1 — Configuração por ambiente (D7)
- `dotenv` carregado no início de `index.ts`.
- `SEFAZ_URL` lida do ambiente, com o endpoint de produção como default — a CLI tem de funcionar
  sem `.env` na máquina do usuário.
- `.env.example` commitado com a URL de produção; `.env` no `.gitignore`.

### 2.2 — Entrada e validação com Joi (D8)
- Ler as chaves de `process.argv.slice(2)`.
- Nenhuma chave → mensagem de uso no stderr e `exit 1`.
- Deduplicar preservando a ordem de primeira aparição (D6).
- Escrever os schemas em [cli/src/schema.ts](../cli/src/schema.ts) — hoje o arquivo tem apenas o
  namespace `Schemas` vazio. O schema da chave DANFE precisa distinguir os três erros do contrato,
  o que **não sai de um `.length(44).pattern(/^\d+$/)` só**: Joi devolve a primeira falha, então
  cada regra precisa de rótulo próprio para mapear em `INVALID_LENGTH`, `INVALID_FORMAT` e
  `UNSUPPORTED_UF`. Usar `.messages()` com chaves distintas por tipo de erro, e traduzir o
  `error.details[0].type`/rótulo no código de erro do contrato.
- A validação continua sem I/O, para ser testável direto na etapa 4.

> Joi valida a *forma* da chave, não a existência da nota. `NOT_FOUND` depende da resposta do
> SEFAZ e fica fora do schema.

### 2.3 — Refatorar `ExtractNfeData`
- Validar **antes** de buscar.
- Separar busca (`getDanfeData`) de extração, para que a extração possa ser testada com fixture sem
  tocar a rede.
- Trocar o `DanfeError` atual (`Message` solto) pelo `Error: { Code, Message }` do contrato.
- Envolver a extração em try/catch → `PARSE_ERROR`, incluindo o caso de `Company` ausente.
- Timeout de 15s no axios e 1 retry em erro de rede/5xx (D5).
- **Decodificar a resposta explicitamente.** O axios devolve string decodificada como UTF-8 por
  padrão. Pedir `responseType: "arraybuffer"` e decidir o charset a partir dos bytes.
  **Confirmado contra o endpoint real:** a página chega em **latin-1**, e o header não traz charset
  nenhum (`Content-Type: text/html`), então não há declaração em que confiar. Ver a seção de
  encoding abaixo.

### 2.4 — Extrair a data de emissão
Campo `Date` do contrato, que ainda não existe no código.

Nas fixtures, a data vive num `<td class="NFCCabecalho_SubTitulo">` junto com número e série:

```html
<td class="NFCCabecalho_SubTitulo" align="center">
  NFC-e nº: 20353
  Série: 7
  Data de Emissão: 31/10/2025 12:56:53</td>
```

**Cuidado com duas armadilhas confirmadas nas fixtures:**

- `NFCCabecalho_SubTitulo` é a *mesma* classe de onde sai `Company` (índice `[0]`). Não dependa de
  índice posicional: localize o elemento dessa classe cujo texto contém `Data de Emissão`.
- A página também contém **`Data/Hora da Consulta`**, que é o timestamp da consulta, não da nota — e
  aparece inclusive dentro de uma string JavaScript no topo do HTML. Um regex ingênuo pela primeira
  data da página pega a data errada.

Formato de origem `DD/MM/YYYY HH:MM:SS`, convertido para o ISO do contrato. Presente e consistente
nas 5 fixtures.

### 2.4b — CNPJ e nome fantasia do emitente

Campos `Cnpj` e `TradeName` do contrato, acrescentados depois que as outras tarefas fecharam.

O CNPJ está no cabeçalho (`CNPJ: 88.212.113/0254-39      Inscrição Estadual: 0290546800`) — o
recorte precisa parar antes da inscrição estadual, senão captura os dígitos dela. Ele também está
embutido na **chave de acesso**, nos dígitos 7 a 20, então a extração usa a página e cai na chave
quando o cabeçalho não colabora: o campo nunca falta e nunca gera `PARSE_ERROR`.

O nome fantasia **não está na página** — vem da BrasilAPI, sobre os dados abertos da Receita
Federal (`GET https://brasilapi.com.br/api/cnpj/v1/<cnpj>`, sem cadastro). Regras:

- falha **nunca** invalida a nota: `TradeName: null` e `Valid: true`;
- `null` também cobre o cadastro sem fantasia, que é comum em LTDA;
- cache por lote, com dedupe por CNPJ — duas das fixtures compartilham emitente, e o serviço é
  público com limite de requisições;
- retry só em 5xx e rede, como no `SefazClient`; 404 e 400 são definitivos;
- desligável por `CNPJ_LOOKUP=off`, e o endpoint é configurável por `CNPJ_API_URL`.

Medido nos CNPJs das fixtures: 3 de 4 têm fantasia, e ela é claramente mais reconhecível que a
razão social (`BPR COMERCIO DE ALIMENTOS EIRELI` → `MINI KALZONE`,
`SUPERMERCADOS SBS LTDA` → `MULTIMERCADOS VILLAGIO`). O quarto falha com 5xx em dois provedores
diferentes — por isso o fallback para razão social é requisito, não hipótese.

### 2.5 — Executor de lote
- Processa a lista com concorrência máxima 3 (D5).
- Nunca propaga exceção de uma chave para o lote (D4): toda falha vira item `Valid: false`.
- Monta o envelope `Total` / `Success` / `Failed` / `Results`.
- Progresso no **stderr** (ex. `[2/10] consultando 4325...`), nunca no stdout.

### 2.6 — Saída
- `process.stdout.write(JSON.stringify(resultado))` como única escrita em stdout.
- Varrer o código por `console.log` remanescente — há um em
  [index.ts](../cli/src/index.ts) hoje, que precisa sair.

### 2.7 — Limpeza e scripts
- Remover a chave fixa de [index.ts](../cli/src/index.ts).
- Resolver [types.ts](../cli/src/types.ts): o namespace `CliTypes` não é importado por ninguém e usa
  nomes divergentes (`Name`, `UnitaryValue`) dos tipos realmente em uso (`Description`,
  `UnityValue`). Remover, ou reescrever como os tipos do contrato — não manter os dois. O `Date:
  string` que ele já declarava é o campo da tarefa 2.4.
- `package.json`: `build` (`tsc`), `start` (`node dist/index.js`), `test` (`jest`).
- Dependências a adicionar: `joi` e `dotenv` em `dependencies`; o ferramental de teste entra na
  etapa 4.
- `.gitignore` com `cli/dist/`, `cli/node_modules/` e `cli/.env`.

> **Não** adicionar `"type": "module"` ao `package.json`. Com `module: nodenext` e sem esse campo, o
> TypeScript emite CommonJS, que é o que mantém a configuração do Jest trivial na etapa 4. Mudar
> isso depois custa caro.

## Fixtures

Já estão em [cli/test/fixtures/](../cli/test/fixtures/), nomeadas pela chave, **sem necessidade de
script de captura**. Cobertura conferida nos arquivos:

| Caso | Situação |
|------|----------|
| Nota de supermercado/alimentos | 4 fixtures, de 3 a 22 itens |
| Nota de farmácia (1 item) | `...1414448132` |
| **Nota inexistente** | `...7029821903594352` — ver formato abaixo |
| Data de emissão presente | todas |
| Divergência item × pago | `...1414448132`: itens somam 23,21 e o pago é 19,90 |
| **Duas formas de pagamento com valores diferentes** | **ausente** — ver aviso abaixo |

### A resposta de nota inexistente não é uma página de erro

A fixture `...7029821903594352` mostra que o SEFAZ responde **200 com uma página normal** cujo
`<script>` contém um `alert` e um redirect:

```html
<script type="text/javascript">alert('M230 - Documento Fiscal (NFC-e) inexistente na base de
dados da SEFAZ. Falha da empresa no processo de autorização.'); location.href = '...'</script>
```

Ou seja: não há status HTTP de erro para detectar, e o sentinel vive dentro de uma string
JavaScript. O `includes()` que o código já usa **casa com essa fixture** — verificado. O código
`M230` é um candidato mais curto para a detecção, mas sem documentação oficial não há garantia de
que seja estável; manter a frase, ou checar os dois.

### Aviso: a fixture de 2 pagamentos não testa a soma

`...8018091145057451` tem duas linhas de pagamento, mas são `Cartão de Crédito 279,58` e
`Dinheiro 0,00`. Somar as duas e ler apenas a primeira dão **o mesmo resultado**, então essa fixture
não distingue a implementação correta de um bug de "pega só a primeira linha". A
[etapa 4.1](etapa-4-testes.md) cobre isso com uma fixture sintética.

### Encoding

As páginas declaram `charset=iso-8859-1`, as fixtures do repositório estão em **UTF-8 válido**
(reconvertidas ao serem salvas pelo navegador) e a resposta real do endpoint vem em **latin-1** —
verificado: 40 bytes não-ASCII, `0xE3` para `ã`, sequência UTF-8 inválida, e nenhum charset no
header.

Como as três coisas discordam, a decisão não pode vir da declaração: tentativa estrita em UTF-8 com
fallback latin-1 é o que atende fixture e produção ao mesmo tempo
([decode.ts](../cli/src/decode.ts)). Coberto por teste de unidade com bytes montados e, ponta a
ponta, pelo modo `latin1` do servidor falso.

## Definição de pronto

- [x] `node dist/index.js <chave-valida>` imprime o JSON do contrato em stdout, com `Date`
- [x] `node dist/index.js <valida> <inexistente> <outra-uf>` retorna 3 itens, exit `0`
- [x] `node dist/index.js` sem argumentos → uso no stderr, exit `1`
- [x] stdout parseável com `JSON.parse` em todos os casos de exit `0`
- [x] os três erros de formato saem do schema Joi com `Code` distinto e correto
- [x] nenhuma requisição disparada para chave inválida por formato/tamanho/UF
- [x] CLI funciona sem `.env` presente
- [x] `npx tsc` sem erro sob o `strict` atual

Verificado contra as 6 fixtures servidas por um servidor HTTP local: 5 notas extraídas com empresa,
data, valor e itens corretos, a inexistente como `NOT_FOUND`, os três erros de formato sem gerar
requisição, duplicata deduplicada, HTTP 500 com um retry e `FETCH_ERROR`, pico de 3 requisições
simultâneas. A suíte automatizada é a [etapa 4](etapa-4-testes.md).

## Encontrado na implementação: os extratores estavam quebrados em CRLF

`ExtractItems` lia o id do item com `/.*id="(.*)".*/`. Em JavaScript o `.` não casa carriage
return, e as páginas usam CRLF: o id capturado saía como `Item + 1
`, e o `getElementById`
seguinte nunca encontrava o item — toda nota válida virava `PARSE_ERROR`. Corrigido com
`/id="([^"]+)"/`.

Dois ajustes vizinhos, pela mesma razão (o `dom-parser` devolve HTML cru):

- entidades HTML não eram resolvidas, então `C &amp; A Comercio de Alimentos Ltda.` ia para o JSON
  com a entidade literal. Resolvido em `cleanText` ([text.ts](../cli/src/text.ts)), aplicado a
  `Company`, `Description` e `UN`;
- a conversão pt-BR trocava apenas a *primeira* ocorrência do separador de milhar, então
  `1.234.567,89` virava `NaN`. Centralizada em `parsePtBrNumber` ([number.ts](../cli/src/number.ts)).
