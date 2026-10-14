# Fixtures sintéticas

Derivadas das fixtures reais do diretório acima, alterando **apenas valores**, para cobrir casos
que nenhuma nota real capturada exercita.

| Arquivo | Origem | Alteração | Por quê |
|---------|--------|-----------|---------|
| `dois-pagamentos-distintos.html` | `...8018091145057451` | `Cartão 279,58` → `60,00`, `Dinheiro 0,00` → `40,00` (total `100,00`) | A fixture real de 2 pagamentos tem a segunda linha em `0,00`: somar as duas e ler só a primeira dão o mesmo número, então um bug de "pega só a primeira linha" passaria verde |
| `pagamento-com-milhar.html` | `...1414448132` | pagamento `19,90` → `1.234,56` | Nenhuma nota real capturada passa de R$ 1.000, e a conversão pt-BR do separador de milhar é justamente onde `replace(".", "")` falha silenciosamente |

Não são usadas pelo servidor falso (ele só serve as fixtures nomeadas por chave DANFE) — os testes
unitários as leem direto do disco.
