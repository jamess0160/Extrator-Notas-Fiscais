# Etapa 3 — Desenvolvimento da Skill

Escreve a skill em [.claude/skills/notas-fiscais/SKILL.md](../.claude/skills/notas-fiscais/SKILL.md)
— é de lá que o Claude Code carrega skills e as expõe como `/notas-fiscais`; o `skill.md` da raiz
ficou como ponteiro, para o conteúdo não viver duplicado. Depende do [contrato de I/O](contrato-io.md) e da
[especificação de análise](analise-financeira.md), não do código da CLI — pode ser escrita em
paralelo com a etapa 2.

## Responsabilidades

A skill é fina na parte de dados e espessa na de interpretação. Ela **não** valida chaves, **não**
chama o SEFAZ e **não** interpreta HTML — isso é da CLI. O que ela faz:

1. extrair as chaves DANFE da mensagem do usuário;
2. garantir que a CLI está compilada, avisando quando for a primeira execução;
3. rodar o `scan`, mostrar os ramos encontrados e **perguntar o que o usuário quer analisar**;
4. filtrar as chaves conforme a escolha e invocar o `full` com elas;
5. **categorizar os itens e produzir a análise financeira** (D10);
6. apresentar o resultado.

O passo 5 é o valor do produto: a CLI entrega dados, a skill entrega leitura dos dados.

O passo 3 existe porque o uso real parte de um lote grande e indiscriminado — todas as notas em que
o usuário informou o CPF, baixadas do site do governo — e quase nunca é isso que ele quer analisar.
Como o `scan` não consulta o SEFAZ (o CNPJ está dentro da chave), perguntar antes custa quase nada
e evita consultar nota que ninguém pediu. Com **uma única chave** o passo é pulado: decisão com uma
opção só é atrito.

## Tarefas

### 3.1 — Frontmatter
`name` e `description`. A `description` é o que decide se a skill é acionada, então precisa conter
os termos reais de uso: nota fiscal, NFC-e, DANFE, chave de acesso, consultar nota, cupom fiscal —
e também os de análise: gastos, quanto gastei, análise de compras, categorias de gasto.

### 3.2 — Extração das chaves
Chaves DANFE aparecem de formas variadas: 44 dígitos corridos, em grupos de 4 separados por espaço,
uma por linha, ou em lista. Normalizar removendo espaços e separadores antes de passar para a CLI.

Nenhuma chave reconhecida na mensagem → pedir as chaves ao usuário, sem chamar a CLI.

### 3.3 — Setup e aviso de primeira execução (D2)

Antes de tudo, verificar o **Node**: sem ele a CLI não roda, e o sintoma cru é
`node: command not found`. A skill detecta, informa e oferece o comando de instalação do sistema —
sem executar por iniciativa própria, porque a mudança de `PATH` não alcança o terminal já aberto e
a consulta falharia de novo na mesma sessão. Piso de versão: **Node 20** (exigência do `joi`,
declarada em `engines`). Ver [instalacao-skill.md](instalacao-skill.md).

Depois, verificar se `cli/dist/index.js` existe.

**Se não existir**, antes de rodar qualquer coisa, dizer ao usuário que é a primeira execução e que
ela vai demorar mais. Algo como:

> Primeira execução nesta máquina: preciso instalar as dependências e compilar a CLI antes de
> consultar. Isso leva de 30s a 1min. As próximas consultas são imediatas.

Depois rodar, em `cli/`:
```bash
npm install
npx tsc
```

Esse aviso é requisito da etapa, não enfeite: sem ele o usuário fica olhando uma skill
aparentemente travada. Deve vir **antes** dos comandos, não depois.

Se o setup falhar, reportar como **falha de setup** e mostrar a saída do npm/tsc — não confundir com
nota não encontrada. São problemas de natureza diferente e o usuário precisa saber qual é.

**Se existir**, seguir direto para a consulta, sem avisos.

### 3.4 — Invocação
```bash
node cli/dist/index.js <chave1> <chave2> ...
```
- Em lotes acima de **150 chaves**, dividir em chamadas sucessivas e somar os `Results` (D1).
- `exit 0` → `JSON.parse` do stdout.
- `exit 1` → tratar como falha da ferramenta e mostrar o stderr; não tentar adivinhar o resultado.

### 3.5 — Categorização e análise
Seguir [analise-financeira.md](analise-financeira.md). Em resumo:

- cada item recebe uma categoria da **lista fechada** daquele documento — não inventar categorias
  novas, senão nada é comparável entre execuções;
- `Outros` é resposta válida; chutar é pior;
- totais por categoria somam `Items[].TotalValue`; o total da nota é `Value`. **Os dois divergem**
  em dados reais (desconto), e a divergência é reportada, não escondida;
- apenas notas com `Valid: true` entram na análise.

### 3.6 — Apresentação
Ordem: resumo → tabela por categoria → notas → destaques.

- Nome do estabelecimento: `TradeName` (nome fantasia) e, quando ele for `null`, `Company`
  (razão social). É o nome que o usuário reconhece — `MINI KALZONE`, não
  `BPR COMERCIO DE ALIMENTOS EIRELI`. Razão social e CNPJ ficam disponíveis para quando ele
  perguntar quem é a empresa.
- Resumo: período, nº de notas, valor total, ticket médio.
- Tabela por categoria ordenada por valor — é o que o usuário veio ver.
- Uma linha por nota: empresa, data de emissão, valor pago, nº de itens.
- `Date` chega em ISO 8601; formatar para pt-BR (`31/10/2025 12:56`) na apresentação.
- Itens detalhados quando for uma única nota, ou quando o usuário pedir.
- As chaves com `Valid: false` **sempre aparecem**, com a `Message` do erro, e a análise diz
  explicitamente que não as cobre. Uma nota que falhou silenciosamente é pior que um erro visível.
- Com `Failed > 0`, resumo explícito (ex. `8 de 10 consultadas; 2 falharam`).
- Nunca inventar valor, item ou categoria que não veio da CLI.

## Definição de pronto

Instruções escritas (todas as linhas abaixo estão cobertas pelo SKILL.md); o que falta é a
validação em uso, que é a [etapa 4.6](etapa-4-testes.md) — por ser comportamento de LLM, essa
verificação é manual.

- [ ] sem Node instalado → mensagem clara com o comando de instalação, sem tentar instalar sozinha
- [ ] instalada por pacote (bundle ao lado do SKILL.md) → consulta sem compilar nada
- [ ] pedido de atualização → compara a versão instalada com a publicada antes de baixar
- [ ] skill acionada por pedido em linguagem natural com uma ou mais chaves
- [ ] chaves em formatos variados (corridas, espaçadas, uma por linha) reconhecidas
- [ ] primeira execução avisa o usuário **antes** de compilar
- [ ] segunda execução não mostra aviso nem recompila
- [ ] falha de setup distinguível de falha de consulta na mensagem ao usuário
- [ ] lote > 150 chaves dividido corretamente, com resultados somados
- [ ] chaves com erro reportadas, nunca omitidas
- [ ] estabelecimento exibido pelo nome fantasia, com fallback para razão social quando ausente
- [ ] todo item classificado em categoria da lista fechada
- [ ] divergência item-vs-pago reportada quando existir
- [ ] análise declara quando é parcial
