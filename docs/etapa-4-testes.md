# Etapa 4 — Testes e validações

Depende das fixtures capturadas na [etapa 2.5](etapa-2-cli.md). Sem elas, esta etapa vira teste
manual contra o SEFAZ ao vivo.

## Runner

`node:test` + `node:assert`, nativos do Node. Sem dependência nova, sem configuração, e já
compatíveis com o `target: esnext` / `module: nodenext` do [tsconfig](../cli/tsconfig.json).
Rodar sobre o JS compilado em `dist/`:

```bash
npm run build && node --test dist/
```

## 4.1 — Testes unitários dos extratores (fixtures, sem rede)

Onde está quase todo o risco do projeto, porque os extratores dependem da estrutura exata do HTML
do governo.

**`GetDanfeValue`** — soma as linhas de pagamento sob `FORMA PAGAMENTO`:
- nota com uma forma de pagamento
- nota com múltiplas formas → confirmar que **soma**, não que pega a primeira
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

## 4.2 — Validação de chaves (puro, sem rede)

- 44 dígitos e UF `43` → válida
- 43 ou 45 caracteres → `INVALID_LENGTH`
- com letra ou pontuação → `INVALID_FORMAT`
- prefixo `35`, `41`, etc. → `UNSUPPORTED_UF`
- **nenhum desses casos dispara requisição** (garantia 5 do contrato)

## 4.3 — Executor de lote (busca mockada)

- N chaves → exatamente N itens em `Results`
- ordem de `Results` = ordem de primeira aparição no `argv`
- chaves duplicadas → uma requisição, uma entrada (D6)
- uma chave lançando exceção não impede as outras (D4)
- `Total === Results.length` e `Success + Failed === Total`
- concorrência nunca passa de 3 simultâneas
- retry acontece uma vez em erro de rede, e não acontece em `NOT_FOUND`

## 4.4 — Conformidade com o contrato

- exit `0` com falhas parciais, e stdout ainda parseável
- exit `1` sem argumentos
- **stdout contém apenas JSON** — nenhum log vazou. Testar capturando stdout e stderr separados e
  fazendo `JSON.parse` do stdout inteiro, sem filtro ou recorte.

## 4.5 — Teste de integração real (manual, opt-in)

Um teste que bate no SEFAZ de verdade com uma chave válida conhecida, **fora da suíte padrão**
(atrás de variável de ambiente, ex. `RUN_E2E=1`). É o único que detecta mudança na página do
governo, e também o único que falha por motivos alheios ao código. Por isso não pode rodar junto
com os demais.

## 4.6 — Validação manual da Skill

Checklist a executar com a skill de verdade:

- [ ] uma chave → nota correta, com itens
- [ ] 3 chaves de uma vez → 3 notas
- [ ] chave inexistente junto com válidas → erro visível, válidas retornadas
- [ ] chave de outra UF → mensagem clara de UF não suportada
- [ ] chaves em formatos variados (espaçadas, uma por linha)
- [ ] `dist/` apagado → aviso de primeira execução aparece **antes** da compilação
- [ ] segunda consulta → sem aviso, sem recompilar
- [ ] `node_modules` corrompido / sem rede no install → erro reportado como falha de setup
- [ ] conferir um valor total contra a nota real, na mão

O último item é o que fecha o projeto: toda a cadeia pode estar verde e o valor ainda estar errado,
porque `Value` é derivado da soma das formas de pagamento, não lido de um campo "total".

## Definição de pronto

- [ ] `npm test` verde, sem rede
- [ ] extratores cobertos por fixtures, incluindo múltiplas formas de pagamento
- [ ] teste de vazamento de stdout passando
- [ ] e2e real executado ao menos uma vez à mão
- [ ] checklist 4.6 completo
- [ ] um valor total conferido manualmente contra a nota de papel/PDF
