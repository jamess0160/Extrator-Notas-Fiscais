# Etapa 1 — Planejamento

## Objetivo

Fechar as decisões de interface e escopo, de forma que as etapas 2 e 3 possam ser executadas sem
depender uma da outra. **Entregável: [contrato-io.md](contrato-io.md).**

## Decisões tomadas

### D1 — Entrada por `argv`

A skill chama `node cli/dist/index.js <chave1> <chave2> ...`. Sem stdin, sem arquivo de entrada.

Motivo: é a forma mais simples de instruir no `skill.md` e de depurar na mão. O custo é o limite de
tamanho da linha de comando (~8191 caracteres no Windows): com 45 caracteres por chave, cabem
aproximadamente 170 chaves por invocação. A skill resolve isso dividindo lotes grandes em várias
chamadas (ver [etapa-3](etapa-3-skill.md)), com limite conservador de **150 chaves por chamada**.

### D2 — Build no setup, com aviso de primeira execução

O repositório versiona **apenas o fonte**; `cli/dist/` fica no `.gitignore`. A skill verifica se
`cli/dist/index.js` existe e, quando não existe:

1. avisa o usuário explicitamente que é a primeira execução e que ela vai demorar mais que as
   seguintes, porque precisa instalar dependências e compilar;
2. roda `npm install` e `npx tsc` em `cli/`;
3. segue com a consulta.

Esse aviso é requisito, não detalhe de implementação: sem ele o usuário vê a skill travada por
dezenas de segundos sem explicação. O texto exato fica definido na [etapa 3](etapa-3-skill.md).

### D3 — Escopo: somente RS

O endpoint implementado é o do SEFAZ-RS. Os dois primeiros dígitos da chave DANFE são o código
IBGE da UF, e `43` é o Rio Grande do Sul.

A CLI **valida esse prefixo antes de qualquer requisição** e devolve o erro `UNSUPPORTED_UF` para
chaves de outros estados. Sem essa validação, uma chave de outra UF seria enviada ao servidor do RS
e falharia em algum ponto do scraping, produzindo um erro sem relação com a causa real.

Não haverá camada de provider por UF nesta versão. Suportar outro estado significa endpoint e
scraper novos, e é uma decisão para depois.

### D4 — Falha parcial nunca derruba o lote

Cada chave tem seu próprio resultado, com sucesso ou erro independente. Uma chave inexistente, uma
de outra UF ou uma que quebrou no parsing não impedem as demais de retornar. O JSON de saída sempre
descreve todas as chaves recebidas.

### D5 — Concorrência fixa de 3 requisições

As consultas acontecem com no máximo 3 requisições simultâneas ao SEFAZ, timeout de 15s por
requisição e 1 retry em erro de rede ou HTTP 5xx.

Motivo: sequencial é lento demais para lotes de dezenas de notas, e paralelismo irrestrito contra
um servidor público do governo é um jeito eficiente de ser bloqueado. 3 é um meio conservador. Fica
como constante no código, sem flag de linha de comando, até existir motivo concreto para ajustar.

### D6 — Chaves repetidas são deduplicadas

Chaves duplicadas na entrada geram uma única requisição. O JSON de saída preserva uma entrada por
chave única, não por ocorrência.

### D7 — URL do SEFAZ em variável de ambiente

A URL do endpoint sai do código e passa a vir de `SEFAZ_URL`, carregada com `dotenv`, tendo o
endpoint de produção como default — a CLI precisa funcionar sem `.env` na máquina do usuário.

Motivo: é o que permite apontar a suíte de testes para o servidor falso (D9) sem mockar o `axios`.

### D8 — Validação com Joi

Os schemas ficam em [cli/src/schema.ts](../cli/src/schema.ts). Validação de forma da chave apenas
(tamanho, dígitos, UF); existência da nota depende do SEFAZ e fica fora do schema.

Ponto de atenção: Joi reporta a primeira falha encontrada, e o contrato tem três códigos distintos
para erro de forma (`INVALID_LENGTH`, `INVALID_FORMAT`, `UNSUPPORTED_UF`). O schema precisa de
mensagens rotuladas por regra para que o código de erro seja mapeável, e a precedência entre eles
tem de ser travada em teste.

### D9 — Jest + servidor HTTP falso servindo as fixtures

Testes automatizados com Jest. No lugar de mockar o `axios`, os testes sobem um servidor HTTP local
que lê `chaveNFe` do corpo da requisição e devolve `cli/test/fixtures/<chave>.html`, com a CLI
apontada para ele via `SEFAZ_URL` (D7).

Motivo: exercita o caminho HTTP real — form-urlencoded, headers, status, timeout, retry. Um mock de
`axios` testaria o mock, não o cliente.

As fixtures já estão no repositório; não há etapa de captura. Há fixture para nota inexistente
(`...7029821903594352`), então o servidor falso serve o caminho `NOT_FOUND` com HTML real em vez de
sintetizado.

> **Ajuste feito na implementação:** o transform é `@swc/jest`, não `ts-jest`. O `ts-jest` precisa
> da API de JavaScript do pacote `typescript`, que o TypeScript 7 (nativo) não expõe mais, e
> declara `typescript: ">=4.3 <7"`. O Jest e o servidor falso seguem como decidido; só o
> transpilador mudou, com o type-check virando passo separado. Ver a
> [etapa 4](etapa-4-testes.md).

### D10 — A categorização de itens é da skill, não da CLI

A CLI entrega os itens como o SEFAZ os descreve. Categorizar (carnes, frutas, limpeza, …) e analisar
é responsabilidade da skill, especificada em [analise-financeira.md](analise-financeira.md).

Motivo: as descrições são abreviadas, sem acento, truncadas em ~40 caracteres e cheias de marca
(`CARNE RESF BOV S/OSSO BIFE COXAO MOLE KG`, `FLICS BLISTER TUTTI-FRUTTI 17G`). Um dicionário de
palavras-chave na CLI erraria muito — e as fixtures contêm
`ESPONJA SCOTCH-BRITE NAO RISCA LARANJA 3`, onde `LARANJA` é a cor, não a fruta.

Consequência: a CLI segue determinística e testável sem LLM; a análise é validada à mão (etapa 4.6).
O contrato de I/O **não ganha campo de categoria**.

## Riscos registrados

| Risco | Impacto | Mitigação |
|-------|---------|-----------|
| O HTML do SEFAZ muda | Quebra silenciosa dos extratores — principalmente `ExtractItems`, que mapeia `<td>` por posição, e pode produzir números zerados em vez de erro | Fixtures + validação de sanidade nos valores extraídos (etapa 4) |
| O sentinel de nota inexistente muda de texto | `NOT_FOUND` deixa de ser detectado e vira `PARSE_ERROR` ou dado vazio | Fixture real `...7029821903594352` + teste real opt-in (etapa 4.5) |
| ~~**Encoding**: as páginas declaram `charset=iso-8859-1`, mas as fixtures salvas estão em UTF-8 válido~~ | **Confirmado e resolvido.** O endpoint real serve latin-1 e não manda charset no header; as fixtures são UTF-8. A decisão passou a ser tomada pelos bytes, não pela declaração | [decode.ts](../cli/src/decode.ts), com teste de unidade de bytes montados, modo `latin1` no servidor falso e verificação contra o endpoint real |
| ~~**Nenhuma fixture discrimina somar vs. pegar a primeira forma de pagamento**~~ | **Resolvido.** `60,00` + `40,00` em fixture sintética derivada da nota real | [cli/test/fixtures/sinteticas/](../cli/test/fixtures/sinteticas/) |
| Rate limiting / bloqueio do SEFAZ | Lotes grandes falham em massa | D5 (concorrência 3 + retry) e erro `FETCH_ERROR` por chave, sem derrubar o lote |
| Limite de tamanho do `argv` | Lotes grandes truncados ou erro do shell | D1 — a skill divide em chamadas de até 150 chaves |
| `npm install` falha na primeira execução | Skill inutilizável, possivelmente com erro confuso | A skill reporta a falha do setup como tal, distinguindo-a de erro de consulta (etapa 3) |
| Dependência de página pública de terceiro sem contrato | Projeto pode parar de funcionar sem aviso | Nada a fazer além de erros legíveis e fixtures; registrado como risco aceito |

## Fora de escopo nesta versão

- UFs além do RS (D3).
- NF-e de produto (modelo 55); o endpoint atual é de NFC-e (modelo 65).
- Persistência, cache ou banco de dados de notas consultadas.
- Exportação para CSV/Excel. A saída é JSON; conversão é responsabilidade de quem consome.
- Flags de configuração na CLI além do mínimo definido no contrato.

## Checklist da etapa

- [x] D1 — transporte de entrada
- [x] D2 — modelo de execução e build
- [x] D3 — escopo de UF
- [x] D4 — semântica de falha parcial
- [x] D5 — concorrência e timeouts
- [x] D6 — deduplicação
- [x] D7 — URL do SEFAZ em ambiente
- [x] D8 — validação com Joi
- [x] D9 — Jest + servidor falso de fixtures
- [x] D10 — categorização na skill
- [ ] [contrato-io.md](contrato-io.md) revisado e aprovado
