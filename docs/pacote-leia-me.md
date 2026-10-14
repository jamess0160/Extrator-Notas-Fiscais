# Consulta de notas fiscais (NFC-e RS) — versão {{VERSION}}

Skill de Claude Code que consulta notas fiscais eletrônicas de consumidor do Rio Grande do Sul pela
chave de acesso de 44 dígitos e faz a análise financeira das compras.

> Este arquivo é gerado junto do pacote. Se você está lendo o repositório, a fonte dele é
> `docs/pacote-leia-me.md`.

## Instalação

**Requisito:** Node.js 20 ou superior (`node --version`). Nada mais — sem `npm install`, sem
compilação, sem git.

Copie a pasta `notas-fiscais` para dentro de `~/.claude/skills/`:

```bash
# Linux/macOS
mkdir -p ~/.claude/skills && cp -r notas-fiscais ~/.claude/skills/
```

```powershell
# Windows
New-Item -ItemType Directory -Force $HOME\.claude\skills | Out-Null
Copy-Item -Recurse notas-fiscais $HOME\.claude\skills\
```

Reabra o Claude Code. A skill fica disponível como `/notas-fiscais`, e também é acionada por pedido
em linguagem natural quando você menciona nota fiscal, cupom fiscal ou passa uma chave de acesso.

Conferir que funcionou:

```bash
node ~/.claude/skills/notas-fiscais/{{BUNDLE}} --version
```

## Uso

```
/notas-fiscais 4325 1088 2121 1302 5439 6500 7000 0203 5314 1444 8132
```

Pode passar várias chaves de uma vez, em qualquer formato — corridas, com espaços, uma por linha.
A resposta traz as notas e uma análise por categoria de gasto.

## Atualizar

Compare a versão instalada com a publicada:

```bash
node ~/.claude/skills/notas-fiscais/{{BUNDLE}} --version
curl -s {{REPO_URL}}/raw/main/skill-dist/notas-fiscais/VERSION
```

Se houver versão nova, baixe os dois arquivos que mudam:

```bash
cd ~/.claude/skills/notas-fiscais
curl -L -O {{REPO_URL}}/raw/main/skill-dist/notas-fiscais/{{BUNDLE}}
curl -L -O {{REPO_URL}}/raw/main/skill-dist/notas-fiscais/SKILL.md
```

Nenhuma reinstalação, nenhum build. Se preferir, apague a pasta e repita a instalação.

## Procedência e verificação

| | |
|---|---|
| Código-fonte | {{REPO_URL}} |
| Commit deste pacote | `{{COMMIT}}` |
| Versão | {{VERSION}} |
| Tamanho do `{{BUNDLE}}` | {{TAMANHO}} |
| SHA-256 do `{{BUNDLE}}` | `{{SHA256}}` |

`{{BUNDLE}}` **não é um binário**: é JavaScript legível, com as dependências (`axios`, `joi`,
`dom-parser`, `dotenv`) embutidas no mesmo arquivo. Você pode abrir, ler e pesquisar nele.

O empacotamento é **reprodutível byte a byte**. Para confirmar que o arquivo que você recebeu é
exatamente o que o código-fonte público produz:

```bash
git clone {{REPO_URL}} && cd Extrator-Notas-Fiscais
git checkout {{COMMIT}}
cd cli && npm install && npm run package
# compare o sha256 impresso com o da tabela acima
```

Conferir o hash do arquivo que está na sua mão:

```bash
sha256sum {{BUNDLE}}                      # Linux
shasum -a 256 {{BUNDLE}}                  # macOS
Get-FileHash {{BUNDLE}} -Algorithm SHA256 # Windows
```

Isso prova que o pacote corresponde ao código-fonte, e não que o código-fonte seja confiável — para
essa parte, o código está aberto e é curto o suficiente para ser lido.

## O que o programa faz na sua máquina

- **Rede:** fala com dois endereços, e só com eles — `www.sefaz.rs.gov.br`, que devolve a página
  pública da nota, e `brasilapi.com.br`, que resolve o CNPJ do emitente em nome fantasia e ramo de
  atividade a partir dos dados abertos da Receita Federal. A segunda consulta é opcional: com a
  variável de ambiente `CNPJ_LOOKUP=off`, a skill usa apenas a razão social impressa na nota.
- **Disco:** escreve **um** arquivo, `~/.extrator-nfe/cnpj.json`, que é o cache das consultas de
  CNPJ. Guarda apenas dado público de cadastro indexado por CNPJ — nome fantasia, razão social e
  CNAE. **Nunca** chave de nota, valor ou item comprado. Apagar o arquivo é seguro, e
  `CNPJ_CACHE=off` desliga a escrita por completo. Fora disso, só lê o próprio programa.
- **Credenciais:** não usa nenhuma. A consulta de nota fiscal do SEFAZ é pública e não
  autenticada; a da Receita também.
- **Telemetria:** nenhuma.

As chaves que você consultar vão para o SEFAZ (que já as conhece) e o CNPJ do emitente vai para a
BrasilAPI. Nada além disso sai da sua máquina.

O cache existe porque a skill consulta em dois passos: primeiro identifica o ramo de cada
estabelecimento — o que não exige o SEFAZ, já que o CNPJ está dentro da chave de acesso — para você
escolher quais notas analisar, e só depois busca as notas escolhidas. Sem o cache, cada CNPJ seria
consultado duas vezes no mesmo fluxo.

## Limites conhecidos

- **Só Rio Grande do Sul.** A chave de acesso começa com o código da UF; apenas `43` é suportado, e
  chaves de outros estados são recusadas antes de qualquer consulta.
- Depende da estrutura da página do SEFAZ. Se o governo mudar o HTML, a consulta passa a devolver
  `PARSE_ERROR` com a descrição do que faltou, em vez de dados errados.
- O nome fantasia vem de cadastro público e às vezes não existe; nesse caso a razão social é usada.
