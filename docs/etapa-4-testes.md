# Etapa 4 — Testes e validações

As fixtures já estão em [cli/test/fixtures/](../cli/test/fixtures/), nomeadas pela chave DANFE.

## Ferramental (D9)

**Jest** para os testes automatizados, e um **servidor HTTP falso** que serve as fixtures no lugar
do SEFAZ. A CLI aponta para ele por `SEFAZ_URL` (D7).

A vantagem sobre mockar o `axios`: o caminho de rede real é exercitado — form-urlencoded, headers,
status, timeout, retry. Um mock de `axios` testaria o mock, não o cliente HTTP.

```
teste → sobe servidor falso em porta efêmera
      → SEFAZ_URL=http://127.0.0.1:<porta>
      → CLI faz POST real → servidor lê chaveNFe do body → devolve fixtures/<chave>.html
```

### Configuração
- `jest`, `ts-jest`, `@types/jest` em `devDependencies`.
- Preset `ts-jest` padrão (CommonJS). Isso só funciona porque o `package.json` **não** tem
  `"type": "module"` — ver a nota na [etapa 2.7](etapa-2-cli.md). Com ESM, o Jest exigiria
  `--experimental-vm-modules` e configuração de transform bem mais chata.
- `npm test` → `jest`.

### O servidor falso
Helper em `cli/test/` que:
- sobe em **porta 0** (efêmera), para não colidir com nada nem entre testes paralelos;
- lê `chaveNFe` do corpo `application/x-www-form-urlencoded`, igual ao SEFAZ;
- chave com fixture → serve o HTML;
- chave sem fixture → serve a fixture real de nota inexistente (`...7029821903594352`), que é uma
  página **200** com o sentinel dentro de um `alert()` JavaScript. Não há status de erro HTTP para
  simular;
- modos injetáveis de falha para os testes de erro: HTTP 500, atraso acima do timeout, HTML
  truncado;
- fecha no `afterAll`, para o Jest não ficar com handle aberto.

## 4.1 — Testes unitários dos extratores (fixture lida de disco, sem servidor)

Onde está quase todo o risco do projeto, porque os extratores dependem da estrutura exata do HTML
do governo. Aqui a fixture é lida direto do arquivo e passada ao extrator.

**`GetDanfeValue`** — soma as linhas de pagamento sob `FORMA PAGAMENTO`:
- pagamento único → valor da nota
- **fixture sintética com 2 pagamentos de valores diferentes** (ex. `60,00` + `40,00` = `100,00`).
  Isso é necessário: a fixture real de 2 pagamentos (`...8018091145057451`) tem
  `Cartão 279,58` + `Dinheiro 0,00`, e com ela somar ou ler só a primeira linha dá o mesmo número —
  um bug de "pega a primeira" passaria verde. Derivar a sintética de uma fixture real, alterando
  só os valores
- valor com separador de milhar (`1.234,56` → `1234.56`)
- HTML sem o bloco `FORMA PAGAMENTO` → erro, não `0`

> Distinguir "soma zero" de "não achei" importa: hoje um bloco ausente pode produzir um total `0`
> silencioso, que parece um resultado válido.

**`ExtractItems`** — mapeia `<td>` por posição:
- nota com múltiplos itens → todos extraídos
- `Description`, `Quantity`, `UN`, `UnityValue`, `TotalValue` nas posições certas
- conversão pt-BR nos numéricos
- sanidade: `Quantity * UnityValue ≈ TotalValue` para cada item

Esse último teste é o que detecta troca de ordem de colunas na página do SEFAZ. Sem ele, uma
mudança no HTML passa como sucesso com números trocados.

**Data de emissão** (2.4):
- as 5 fixtures → data correta, no formato do contrato
- **não confundir com `Data/Hora da Consulta`**: asserção explícita de que a data extraída é a de
  emissão. As duas existem na página, e a da consulta aparece antes no HTML
- ausência do campo → `PARSE_ERROR`

**`Company`**:
- extraída corretamente das fixtures
- HTML sem `NFCCabecalho_SubTitulo` → `PARSE_ERROR`, nunca `undefined` vazando para o JSON

**Encoding** (2.3):
- buffer com bytes **latin-1** contendo acento → string correta. As fixtures do repositório estão em
  UTF-8, então esse caso precisa de bytes montados no teste: pegar uma fixture, converter para
  latin-1 e servir pelo servidor falso. Sem isso o caminho de decodificação nunca é exercitado
- asserção de que `Company` e `Description` com acento chegam íntegros ao JSON

## 4.2 — Schemas Joi (puro, sem rede)

- 44 dígitos e UF `43` → válida
- 43 ou 45 caracteres → `INVALID_LENGTH`
- com letra ou pontuação → `INVALID_FORMAT`
- prefixo `35`, `41`, etc. → `UNSUPPORTED_UF`
- chave vazia e `undefined` → erro, sem exceção não tratada

O ponto crítico é a **distinção** entre os três códigos: Joi reporta a primeira falha, então uma
chave como `abc` (curta *e* não numérica) precisa produzir um código previsível e documentado.
Travar essa precedência em teste, senão ela muda sem ninguém notar.

- **nenhum desses casos dispara requisição** — asserção contra o servidor falso: ele não deve
  registrar nenhum hit (garantia 5 do contrato)

## 4.3 — Executor de lote (contra o servidor falso)

- N chaves → exatamente N itens em `Results`
- ordem de `Results` = ordem de primeira aparição no `argv`
- chaves duplicadas → **uma** requisição no servidor falso, uma entrada em `Results` (D6)
- `...7029821903594352` (nota inexistente) → `NOT_FOUND`, e as válidas do mesmo lote retornam
  normalmente (D4)
- servidor em modo 500 → `FETCH_ERROR` naquela chave, lote segue
- `Total === Results.length` e `Success + Failed === Total`
- concorrência nunca passa de 3 simultâneas — contar requisições concorrentes no servidor falso
- retry acontece uma vez em erro de rede/5xx, e **não** acontece em `NOT_FOUND`

## 4.4 — Conformidade com o contrato (CLI como subprocesso)

Rodar a CLI compilada via `child_process`, com `SEFAZ_URL` apontando para o servidor falso:

- exit `0` com falhas parciais, e stdout ainda parseável
- exit `1` sem argumentos
- **stdout contém apenas JSON** — nenhum log vazou. Capturar stdout e stderr separados e fazer
  `JSON.parse` do stdout inteiro, sem filtro ou recorte
- a saída bate com o contrato campo a campo, `Date` incluído

## 4.5 — Teste de integração real (manual, opt-in)

Um teste que bate no SEFAZ de verdade com uma chave válida conhecida, **fora da suíte padrão**
(atrás de variável de ambiente, ex. `RUN_E2E=1`). É o único que detecta mudança na página do
governo — incluindo a frase do sentinel de nota inexistente, que o servidor falso apenas presume — e
também o único que falha por motivos alheios ao código. Por isso não roda junto com os demais.

## 4.6 — Validação manual da Skill

Checklist a executar com a skill de verdade:

- [ ] uma chave → nota correta, com itens e data
- [ ] 3 chaves de uma vez → 3 notas
- [ ] chave inexistente junto com válidas → erro visível, válidas retornadas
- [ ] chave de outra UF → mensagem clara de UF não suportada
- [ ] chaves em formatos variados (espaçadas, uma por linha)
- [ ] `dist/` apagado → aviso de primeira execução aparece **antes** da compilação
- [ ] segunda consulta → sem aviso, sem recompilar
- [ ] `node_modules` corrompido / sem rede no install → erro reportado como falha de setup
- [ ] conferir um valor total contra a nota real, na mão

### Análise financeira ([analise-financeira.md](analise-financeira.md))

Validada à mão por construção (D10): a categorização é semântica, não determinística.

- [ ] todo item recebe categoria da lista fechada; nenhuma categoria inventada
- [ ] `ESPONJA SCOTCH-BRITE NAO RISCA LARANJA 3` cai em `Limpeza`, **não** em `Frutas` — é o caso
      que prova que a categorização não é por palavra-chave
- [ ] `DIPIRONA 1G 20CP GEN PRATI` → `Saúde e farmácia`
- [ ] `FRANGO NUTRIFRANGO 700G SASSAMI` → `Carnes e peixes`
- [ ] na fixture `...1414448132`, a divergência de R$ 3,31 entre soma dos itens (23,21) e valor pago
      (19,90) aparece explicitamente, e os percentuais de categoria não somam mais de 100%
- [ ] as mesmas notas, analisadas duas vezes, produzem as mesmas categorias
- [ ] nenhuma soma de `Quantity` misturando `KG` e `UN`
- [ ] com uma chave inexistente no lote, a análise declara que é parcial
- [ ] nenhum item, valor ou categoria inventado em relação ao JSON da CLI

O penúltimo item da lista anterior é o que fecha o projeto: toda a cadeia pode estar verde e o valor ainda estar errado,
porque `Value` é derivado da soma das formas de pagamento, não lido de um campo "total".

## Definição de pronto

- [ ] `npm test` verde, **sem acesso à internet**
- [ ] extratores cobertos pelas 6 fixtures, mais a sintética de 2 pagamentos distintos
- [ ] caminho de decodificação latin-1 coberto
- [ ] data de emissão testada contra a confusão com a data de consulta
- [ ] precedência dos códigos de erro do Joi travada em teste
- [ ] teste de vazamento de stdout passando
- [ ] e2e real executado ao menos uma vez à mão
- [ ] checklist 4.6 completo
- [ ] um valor total conferido manualmente contra a nota de papel/PDF
- [ ] checklist de análise financeira completo
