---
name: notas-fiscais
description: Consulta notas fiscais eletrônicas de consumidor (NFC-e) do RS a partir da chave de acesso DANFE de 44 dígitos e faz a análise financeira das compras. Use quando o usuário passar uma ou mais chaves de acesso, falar de nota fiscal, cupom fiscal, NFC-e, DANFE, ou pedir para saber quanto gastou, em que gastou, análise de compras ou gastos por categoria.
---

# Consulta e análise de notas fiscais (NFC-e RS)

A consulta é feita por uma CLI deste repositório, que raspa a página pública do SEFAZ-RS. A CLI
entrega os dados; **a análise é sua** — é ela o valor do produto.

Divisão de trabalho, para não duplicar esforço: a CLI valida as chaves, chama o SEFAZ, interpreta o
HTML e devolve JSON. Você não valida chave, não monta requisição e não lê HTML.

## Passo 0 — Verificar o Node e localizar a CLI

Antes de qualquer coisa, rode `node --version`.

**Se o comando não existir**, pare aqui: a CLI é um programa Node e nada mais vai funcionar. Diga
isso ao usuário e ofereça o comando do sistema dele, **sem executá-lo por conta própria**:

| Sistema | Comando |
|---------|---------|
| Windows | `winget install OpenJS.NodeJS.LTS` |
| macOS | `brew install node` |
| Linux (Debian/Ubuntu) | `sudo apt install nodejs npm` |

Instale só se o usuário pedir. E avise que, depois de instalar, **o terminal precisa ser reaberto**:
a variável `PATH` do processo em execução não é atualizada, então `node` continuaria indisponível
nesta sessão mesmo com a instalação bem-sucedida.

**Se a versão for menor que 20**, também pare: a dependência `joi` exige Node 20 ou superior, e o
sintoma de ignorar isso é um erro de instalação confuso, não uma mensagem clara.

Guia completo em `<projeto>/docs/instalacao-skill.md`.

## Localizar a CLI

Resolva o diretório do projeto nesta ordem e use o primeiro que existir:

1. `$EXTRATOR_NFE_HOME` (ou `$env:EXTRATOR_NFE_HOME` no PowerShell), se estiver definida — é como a
   skill é instalada globalmente;
2. a raiz do repositório atual, se ela tiver uma pasta `cli/`.

Daqui em diante, `<projeto>` é esse diretório e todos os comandos rodam a partir dele. Se nenhum
dos dois existir, diga ao usuário que a skill não encontrou o projeto e aponte o guia de
instalação (`docs/instalacao-skill.md`) — não tente adivinhar o caminho nem instalar nada fora
dele.

## Passo 1 — Extrair as chaves da mensagem

As chaves têm 44 dígitos e aparecem em formatos variados: corridas, em grupos de 4 separados por
espaço (é como a própria nota imprime), uma por linha, ou em lista com marcadores. Remova espaços e
separadores de cada chave antes de passar para a CLI.

Nenhuma chave reconhecida → peça as chaves ao usuário e **não** chame a CLI.

Não descarte uma chave que pareça errada: passe para a CLI e deixe que ela devolva o código de
erro. A validação é dela.

## Passo 2 — Garantir que a CLI está compilada

Verifique se `<projeto>/cli/dist/index.js` existe.

**Se não existir**, avise o usuário **antes** de rodar qualquer comando:

> Primeira execução nesta máquina: preciso instalar as dependências e compilar a CLI antes de
> consultar. Isso leva de 30s a 1min. As próximas consultas são imediatas.

O aviso vem antes, não depois — sem ele o usuário fica olhando uma skill aparentemente travada.
Depois, em `<projeto>/cli`:

```bash
npm install
npm run build
```

Se o setup falhar, reporte como **falha de setup**, mostrando a saída do npm/tsc. Não confunda com
nota não encontrada: são problemas de natureza diferente e o usuário precisa saber qual é.

**Se existir**, siga direto para a consulta, sem avisos.

## Passo 3 — Consultar

Uma única chamada com todas as chaves:

```bash
node <projeto>/cli/dist/index.js <chave1> <chave2> ...
```

- Acima de **150 chaves**, divida em chamadas sucessivas e junte os `Results`.
- **exit 0** → faça `JSON.parse` do stdout. Vale inclusive quando todas as chaves falharam.
- **exit 1** → falha da ferramenta. Mostre o stderr e pare; não tente adivinhar o resultado.

O stdout é exclusivamente JSON; o progresso vai para o stderr. O formato está em `<projeto>/docs/contrato-io.md`:

```json
{ "Total": 2, "Success": 1, "Failed": 1, "Results": [
  { "Danfe": "4325…", "Valid": true, "Company": "…", "Date": "2025-10-31T12:56:53",
    "Value": 19.9, "Items": [ { "Description": "…", "Quantity": 1, "UN": "UN",
    "UnityValue": 23.21, "TotalValue": 23.21 } ] },
  { "Danfe": "4326…", "Valid": false, "Error": { "Code": "NOT_FOUND", "Message": "…" } } ] }
```

Cada item de `Results` é união discriminada por `Valid`: só leia `Company`/`Date`/`Value`/`Items`
depois de confirmar `Valid: true`.

Códigos de erro possíveis: `INVALID_LENGTH`, `INVALID_FORMAT`, `UNSUPPORTED_UF` (só RS é
suportado), `NOT_FOUND`, `FETCH_ERROR`, `PARSE_ERROR`.

## Passo 4 — Categorizar os itens

Cada item recebe **uma** categoria desta lista fechada. Não invente categoria nova: sem lista fixa,
a mesma nota recebe categorias diferentes em execuções diferentes e nada é comparável no tempo.

| Categoria | Inclui |
|-----------|--------|
| `Carnes e peixes` | bovina, suína, aves, peixe, embutidos frescos |
| `Frutas` | frutas frescas |
| `Verduras e legumes` | hortaliças, tubérculos |
| `Laticínios e frios` | leite, queijo, presunto, iogurte, manteiga |
| `Padaria` | pães, massas frescas de padaria, salgados |
| `Mercearia e secos` | óleo, azeite, massas, grãos, enlatados, temperos, açúcar, café |
| `Doces e snacks` | biscoitos, wafer, chocolate, balas, salgadinhos |
| `Bebidas` | água, refrigerante, suco, cerveja, vinho |
| `Limpeza` | detergente, sabão, esponja, desinfetante, álcool |
| `Higiene pessoal` | sabonete, shampoo, barbear, papel higiênico |
| `Saúde e farmácia` | medicamentos, suplementos, material de saúde |
| `Outros` | não classificável com confiança |

As descrições são abreviadas, sem acento, truncadas em ~40 caracteres e dominadas por marca
(`FRANGO NUTRIFRANGO 700G SASSAMI` é frango; `FLICS BLISTER TUTTI-FRUTTI 17G` é bala). Leia o
produto inteiro antes de decidir — `ESPONJA SCOTCH-BRITE NAO RISCA LARANJA 3` é `Limpeza`, e
`LARANJA` ali é a cor da esponja, não uma fruta.

- `Outros` é resposta legítima. Chutar é pior: contamina o agregado sem deixar rastro.
- Se `Outros` passar de ~10% do valor, diga isso — a análise está cega para uma parte relevante.
- Categorize pelo **produto**, não pelo estabelecimento: farmácia vende chocolate e supermercado
  vende remédio.

## Passo 5 — Analisar

Detalhes em `<projeto>/docs/analise-financeira.md` — a taxonomia acima já é suficiente para
classificar; leia o documento quando precisar do restante. O essencial:

**Base de cálculo.** Totais por categoria somam `Items[].TotalValue`; o total da nota é `Value`, o
que de fato saiu do bolso. **Os dois divergem em dados reais** — numa das notas de teste os itens
somam R$ 23,21 e o pago é R$ 19,90, por desconto. Quando a diferença passar de ~1%, mostre como
linha própria (`desconto/ajuste: R$ 3,31`). Nunca force o fechamento, e nunca calcule percentual de
categoria sobre `Value`: daria mais de 100%.

**Conteúdo:** período coberto, nº de notas, total pago, ticket médio; tabela por categoria com
valor, % do total de itens e nº de itens; uma linha por nota; top 5 itens por `TotalValue`; itens
repetidos entre notas com o preço unitário comparado quando variar; comparação entre
estabelecimentos, se houver mais de um.

**Nunca** some `Quantity` entre unidades diferentes — `KG` e `UN` convivem nas notas e a média
misturando os dois não significa nada. Agregue por valor, que é sempre comparável.

Não infira tendência ou sazonalidade a partir de poucas notas em intervalo curto. Orçamento, meta
de gasto e recomendação de corte só se o usuário pedir.

## Passo 6 — Apresentar

Ordem: **resumo → tabela por categoria → notas → destaques**. A tabela por categoria é o que o
usuário veio ver; ordene por valor decrescente.

- `Date` chega em ISO 8601; mostre em pt-BR (`31/10/2025 12:56`).
- Itens detalhados quando for uma nota só, ou quando o usuário pedir.
- Chaves com `Valid: false` **sempre aparecem**, com a `Message` do erro, e a análise diz
  explicitamente que não as cobre. Uma nota que falhou em silêncio é pior que um erro visível.
- Com `Failed > 0`, resumo explícito: `8 de 10 consultadas; 2 falharam`.

## Regra inviolável

Todo valor, item, data e empresa vem do JSON da CLI. Não complete lacuna, não estime valor ausente
e não deduza item que não está em `Items`. Se o dado não veio, diga que não veio.
