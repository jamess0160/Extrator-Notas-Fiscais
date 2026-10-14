# Análise financeira

Especificação da camada de análise da skill. Consumida pela [etapa 3](etapa-3-skill.md); é para a
análise o que o [contrato de I/O](contrato-io.md) é para a CLI.

Entrada: o JSON do contrato, já consultado. A análise **não** faz rede, não chama a CLI e não
reinterpreta HTML.

A análise tem **dois eixos**: *o que* foi comprado (a taxonomia de itens abaixo) e *onde* (o
`Segment` que a CLI devolve). O segundo é dado, não inferência — ver
[ramo do estabelecimento](contrato-io.md#ramo-do-estabelecimento).

## D10 — Quem categoriza é a skill, não a CLI

A categorização **de itens** acontece na skill (ou seja, no Claude lendo o JSON), não na CLI. O
ramo do estabelecimento é o caso oposto e fica na CLI: `5611203` é lanchonete por definição da
tabela do IBGE, sem texto a interpretar.

As descrições reais das fixtures explicam por quê:

```
CARNE RESF BOV S/OSSO BIFE COXAO MOLE KG
AZEITE DE OLIVA ANDORINHA VIDRO EX.VIRGE
SABONETE LUX SUAVE BOTANICALS ORQUIDEA N
FLICS BLISTER TUTTI-FRUTTI 17G
```

São abreviadas, sem acento, truncadas em ~40 caracteres, dominadas por marca e com a categoria
frequentemente implícita (`FLICS BLISTER` é uma bala; `SASSAMI` é frango). Um dicionário de
palavras-chave na CLI erraria muito e exigiria manutenção infinita.

E erraria de formas embaraçosas. Nas fixtures existe literalmente:

```
ESPONJA SCOTCH-BRITE NAO RISCA LARANJA 3
```

onde `LARANJA` é a cor da esponja. Um matcher por palavra-chave classifica isso como fruta.

Consequência de escopo: a CLI segue sendo um scraper determinístico, testável sem LLM, e a
[etapa 4](etapa-4-testes.md) continua automatizável. A análise é validada à mão.

## Taxonomia fixa

A categorização usa **esta lista fechada**. Sem isso, a mesma nota recebe categorias diferentes em
execuções diferentes e nada é comparável ao longo do tempo.

| Categoria | Inclui | Exemplo das fixtures |
|-----------|--------|----------------------|
| `Carnes e peixes` | bovina, suína, aves, peixe, embutidos frescos | `CARNE MOIDA I RESF BOV KG`, `CALABRESA UN`, `FRANGO NUTRIFRANGO 700G SASSAMI` |
| `Frutas` | frutas frescas | `BANANA BRANCA KG`, `MORANGO 500ML` |
| `Verduras e legumes` | hortaliças, tubérculos | `TOMATE LONGA VIDA KG`, `CEBOLA KG`, `CENOURA GRANEL KG`, `BATATA INGLESA KG BRANCA` |
| `Laticínios e frios` | leite, queijo, presunto, iogurte, manteiga | `QUEIJO FRIZZO 300G MUSSARELA FATIADO`, `PRESUNTO COZIDO SADIA SOLTISSIMO 200G` |
| `Padaria` | pães, massas frescas de padaria, salgados | `PAO FORMA PANITTS 400G DE LEITE`, `PAO DE QUEIJO CAPRICIOSA KG` |
| `Mercearia e secos` | óleo, azeite, massas, grãos, enlatados, temperos, açúcar, café | `OLEO DE SOJA COAMO 900ML`, `LENTILHA YOKI 400G TP2`, `EXTRATO TOMATE ELEFANTE 300G` |
| `Doces e snacks` | biscoitos, wafer, chocolate, balas, salgadinhos | `BISCOITO KEIKO 320G GOIABINHA`, `WAFER PANINE 250G CASEIRO`, `FLICS BLISTER HORTELA 17G` |
| `Bebidas` | água, refrigerante, suco, cerveja, vinho | — (ausente nas fixtures) |
| `Limpeza` | detergente, sabão, esponja, desinfetante, álcool | `DETERGENTE GIRANDO SOL NEUTRO 500ML`, `ESPONJA SCOTCH-BRITE`, `ALCOOL PRONTO SOCORRO 1L` |
| `Higiene pessoal` | sabonete, shampoo, barbear, papel higiênico | `SABONETE LUX SUAVE BUQUE DE JASMIM 85G`, `APARELHO BIC 3 ENCARTELADO` |
| `Saúde e farmácia` | medicamentos, suplementos, material de saúde | `DIPIRONA 1G 20CP GEN PRATI` |
| `Refeição fora de casa` | pratos, porções e bebidas servidas em restaurante, lanchonete ou bar | — (depende do ramo; ver abaixo) |
| `Combustível` | gasolina, etanol, diesel, GLP | — |
| `Outros` | não classificável com confiança | — |

As duas penúltimas **dependem do `Segment`** e não existiriam sem ele. Numa lanchonete os itens são
pratos, não ingredientes: `X-BURGER` não é `Carnes e peixes` nem `Padaria`, e a descrição sozinha
não distingue um hambúrguer pronto de carne moída. É o ramo que transforma esse palpite em dedução.

Regras:
- `Outros` é resposta legítima. Chutar categoria é pior que admitir incerteza, porque contamina o
  agregado sem deixar rastro.
- Se `Outros` passar de ~10% do valor total, dizer isso ao usuário — é sinal de que a análise está
  cega para uma parte relevante da compra.
- Categorizar pelo **produto**, não pelo estabelecimento: uma farmácia vende chocolate e um
  supermercado vende remédio. O `Segment` **não sobrepõe** essa regra.
- O `Segment` entra em exatamente dois lugares: habilitando `Refeição fora de casa` e
  `Combustível`, e desempatando descrição genuinamente ambígua. Nunca para reclassificar um produto
  claro.
- `Segment: null` não autoriza inferir o ramo pelo nome do estabelecimento para então escolher
  categoria. Sem ramo, vale a descrição do item e nada mais.

## Base de cálculo: itens, não o valor pago

Ponto que precisa ficar explícito, porque os dois números existem e **divergem em dados reais**.

Na fixture `...1414448132`: a soma dos itens é **R$ 23,21** e o valor pago é **R$ 19,90**, uma
diferença de R$ 3,31 (desconto).

Portanto:
- Totais **por categoria** vêm da soma de `Items[].TotalValue`.
- O total **da nota** é `Value` (o que saiu do bolso).
- Os dois **não fecham**, e a análise não deve fingir que fecham.

Quando a divergência passar de ~1%, reportar como linha própria (ex. `desconto/ajuste: R$ 3,31`),
nunca ajustar números para forçar o fechamento. Somar percentuais de categoria sobre `Value` daria
mais de 100% nessa nota.

## Conteúdo da análise

### Por nota
Empresa, data de emissão, valor pago, nº de itens, e as 3 maiores categorias.

### Agregado
- Período coberto (menor e maior `Date`), nº de notas, valor total pago
- Ticket médio por nota
- Divergência total entre soma de itens e valor pago, se houver

### Por categoria
Tabela ordenada por valor decrescente: categoria, valor, % do total de itens, nº de itens.
É o núcleo da análise — o que o usuário quer é "quanto eu gastei com carne".

### Por ramo
Quando houver mais de um `Segment` no lote: tabela com ramo, nº de notas, valor pago e ticket
médio. É o eixo "onde gastei", e para finanças pessoais costuma ser mais acionável que o de
produto — mercado é lista de compras, restaurante é decisão.

Notas com `Segment: null` aparecem como linha própria rotulada *ramo não identificado*, nunca
diluídas nas outras nem omitidas.

### Destaques
- Top 5 itens por `TotalValue`
- Itens repetidos entre notas, com preço unitário comparado quando variar (o mesmo item mais caro
  numa nota que noutra é um achado concreto)
- Comparação entre estabelecimentos, quando houver mais de um

### Observações obrigatórias
- Se `Failed > 0`, dizer que a análise cobre apenas as notas consultadas com sucesso, e quais
  ficaram de fora. Uma análise silenciosamente parcial é pior que nenhuma.
- Nunca somar `Quantity` entre unidades diferentes: `KG` e `UN` convivem nas fixtures
  (`BANANA BRANCA KG` e `CALABRESA UN`), e "quantidade média de itens" misturando os dois não
  significa nada. Agregar por valor, que é sempre comparável.
- Não inferir tendência ou sazonalidade a partir de poucas notas num intervalo curto.

## Fora de escopo

- Orçamento, meta de gasto ou recomendação de corte, a menos que o usuário peça.
- Persistência entre execuções: cada invocação analisa só as notas daquela chamada. Comparação
  histórica exigiria armazenamento, que está fora de escopo (ver [etapa 1](etapa-1-planejamento.md)).
- Categorização nutricional, de saúde ou tributária.
