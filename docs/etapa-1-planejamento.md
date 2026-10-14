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

## Riscos registrados

| Risco | Impacto | Mitigação |
|-------|---------|-----------|
| O HTML do SEFAZ muda | Quebra silenciosa dos extratores — principalmente `ExtractItems`, que mapeia `<td>` por posição, e pode produzir números zerados em vez de erro | Fixtures capturadas na etapa 2 + validação de sanidade nos valores extraídos (etapa 4) |
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
- [ ] [contrato-io.md](contrato-io.md) revisado e aprovado
