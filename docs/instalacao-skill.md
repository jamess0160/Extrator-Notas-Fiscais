# Instalação da skill

Dois caminhos, para públicos diferentes:

| | Caminho | Para quem | Precisa de |
|---|---------|-----------|-----------|
| **A** | [Pacote pronto](#caminho-a--pacote-pronto) | quem só quer usar | Node 20+ |
| **B** | [Código-fonte](#caminho-b--código-fonte) | quem vai mexer no código, ou auditar | Node 20+, git |

O caminho A não tem etapa de instalação: a CLI inteira vai num único arquivo JavaScript, com as
dependências embutidas. Sem `npm install`, sem compilação, sem `node_modules`.

Para o que a skill faz, veja
[.claude/skills/notas-fiscais/SKILL.md](../.claude/skills/notas-fiscais/SKILL.md).

## Requisitos

- **Node.js 20 ou superior** (`node --version`). O piso é 20 porque a dependência `joi` declara
  `engines: { node: ">= 20" }`; o `package.json` da CLI declara o mesmo, então o `npm install`
  avisa em vez de falhar adiante por motivo obscuro.
- Acesso à internet para `https://www.sefaz.rs.gov.br`, de onde vêm as notas, e para
  `https://brasilapi.com.br`, que resolve o CNPJ do emitente em nome fantasia e ramo de atividade.
  O segundo é opcional: com `CNPJ_LOOKUP=off` a CLI usa só a razão social impressa na nota, e sem
  ramo o passo de filtro da skill deixa de funcionar.
- **npm e git**, apenas no caminho B.

Não precisa de Python, Docker, banco de dados nem chave de API. As duas consultas são públicas e
não autenticadas.

## Se o Node não estiver instalado

Sem Node, nada funciona: a skill falha com `node: command not found` (ou um aviso equivalente de
termo não reconhecido, no PowerShell). Ela detecta isso no Passo 0 e para com uma mensagem clara,
em vez de tentar instalar sozinha.

É possível ter o Claude Code sem ter Node — ele é distribuído também como binário nativo e como
aplicativo de desktop. Quem instalou o Claude Code via npm já tem Node.

### Instalar

| Sistema | Comando | Observação |
|---------|---------|------------|
| Windows | `winget install OpenJS.NodeJS.LTS` | Vem com o Windows 10/11; `choco install nodejs-lts` também serve |
| macOS | `brew install node` | Requer [Homebrew](https://brew.sh) |
| Linux (Debian/Ubuntu) | `sudo apt install nodejs npm` | A versão dos repositórios pode ser antiga; confira com `node --version` |
| Qualquer um, versão exata | [fnm](https://github.com/Schniz/fnm) ou [nvm](https://github.com/nvm-sh/nvm): `fnm install 22` | Preferível se você já gerencia versões de Node |

Alternativa sem gerenciador de pacotes: baixar o instalador LTS em
[nodejs.org](https://nodejs.org/) — no Windows, marque a opção que adiciona o Node ao `PATH`.

> **Reabra o terminal depois de instalar.** A instalação altera o `PATH`, e processos já em execução
> não recebem a mudança: no terminal antigo o `node` continua "não encontrado" mesmo com tudo certo.
> Vale para o Claude Code também — feche e abra de novo.

### Por que a skill não instala sozinha

1. **Não compensa.** Pelo problema do `PATH` acima, instalar no meio da sessão não destrava a
   consulta em andamento: o `node` só aparece no terminal seguinte.
2. **É instalar software na máquina de alguém.** Decisão do usuário, não de uma skill de consulta de
   nota fiscal — e em alguns caminhos exige elevação.
3. **Pode atropelar o que já existe.** Quem usa `nvm`, `fnm` ou `volta` tem o Node sob gerenciamento
   de versão; uma instalação paralela via `winget` costuma brigar por precedência no `PATH`.

Se você pedir explicitamente, a skill roda o comando — ela só não faz isso por iniciativa própria.

## Caminho A — pacote pronto

Você recebeu (ou gerou) uma pasta `notas-fiscais` com quatro arquivos:

```
notas-fiscais/
├── SKILL.md             instruções da skill
├── notas-fiscais.cjs    a CLI inteira, ~950 KB, dependências embutidas
├── VERSION              versão instalada, para comparar com a publicada
└── LEIA-ME.md           procedência, verificação e como atualizar
```

Copie a pasta para dentro de `~/.claude/skills/`:

```bash
# Linux/macOS
mkdir -p ~/.claude/skills && cp -r notas-fiscais ~/.claude/skills/
```

```powershell
# Windows
New-Item -ItemType Directory -Force $HOME\.claude\skills | Out-Null
Copy-Item -Recurse notas-fiscais $HOME\.claude\skills\
```

Reabra o Claude Code. É isso — nenhum comando de build, nenhuma variável de ambiente.

### Atualizar

```bash
node ~/.claude/skills/notas-fiscais/notas-fiscais.cjs --version
curl -s https://github.com/jamess0160/Extrator-Notas-Fiscais/raw/main/skill-dist/notas-fiscais/VERSION
```

Se a publicada for mais nova, baixe os dois arquivos que mudam:

```bash
cd ~/.claude/skills/notas-fiscais
curl -L -O https://github.com/jamess0160/Extrator-Notas-Fiscais/raw/main/skill-dist/notas-fiscais/notas-fiscais.cjs
curl -L -O https://github.com/jamess0160/Extrator-Notas-Fiscais/raw/main/skill-dist/notas-fiscais/SKILL.md
```

A skill faz isso se você pedir — basta dizer que quer atualizar a skill de notas fiscais.

### Conferir que o pacote corresponde ao código-fonte

O `notas-fiscais.cjs` **não é binário**: é JavaScript legível, com `axios`, `joi`, `dom-parser` e
`dotenv` embutidos. Dá para abrir e ler.

O empacotamento é **reprodutível byte a byte** — duas execuções do `npm run package` no mesmo commit
produzem arquivos com o mesmo SHA-256. Então quem recebe pode verificar:

```bash
git clone https://github.com/jamess0160/Extrator-Notas-Fiscais
cd Extrator-Notas-Fiscais && git checkout <commit-do-LEIA-ME>
cd cli && npm install && npm run package
```

e comparar o sha256 impresso com o do `LEIA-ME.md` e com o do arquivo recebido.

Isso prova que o pacote corresponde ao código-fonte — não que o código-fonte seja confiável. Para
essa parte, o código está aberto.

## Caminho B — código-fonte

```bash
git clone https://github.com/jamess0160/Extrator-Notas-Fiscais
cd Extrator-Notas-Fiscais/cli
npm install
npm run build
```

O `build` gera `cli/dist/`, que não entra no git — toda cópia nova precisa deste passo, ou deixa a
própria skill fazê-lo na primeira consulta, avisando que vai demorar mais.

Conferir, da raiz do repositório:

```bash
node cli/dist/index.js 43251088212113025439650070000203531414448132
```

Saída esperada: uma linha de JSON no stdout com `"Valid":true`, e o progresso no stderr. Se vier
`"Code":"NOT_FOUND"`, a CLI está funcionando — é a nota que não está mais na base.

Para conferir o `scan`, que não consulta o SEFAZ e por isso responde na hora:

```bash
node cli/dist/index.js scan 43251088212113025439650070000203531414448132
```

### Usar de dentro do repositório

Abra o Claude Code **nesta pasta**. A skill está em `.claude/skills/notas-fiscais/` e é reconhecida
sem configuração; o caminho `cli/dist/index.js` resolve direto.

### Usar de qualquer pasta, a partir do código-fonte

Copie a pasta da skill para `~/.claude/skills/` e aponte `EXTRATOR_NFE_HOME` para o repositório, já
que a CLI não vai com ela:

```bash
export EXTRATOR_NFE_HOME="$HOME/Codigos/Extrator-Notas-Fiscais"
```

```powershell
[Environment]::SetEnvironmentVariable("EXTRATOR_NFE_HOME", "C:\Users\voce\Documents\Codigos\Extrator-Notas-Fiscais", "User")
```

Reabra o terminal e confirme com `echo $EXTRATOR_NFE_HOME` (ou `$env:EXTRATOR_NFE_HOME`).

> Se o seu objetivo é só usar a skill fora do repositório, o **caminho A é melhor**: não precisa de
> variável de ambiente, não depende do repositório continuar no mesmo lugar e não quebra quando o
> `dist/` fica velho. Este modo existe para quem desenvolve e quer a skill apontando para o código
> em edição.

### Atualizar

```bash
cd Extrator-Notas-Fiscais && git pull
cd cli && npm install && npm run build
```

## Verificar

No Claude Code, dentro do diretório escolhido:

```
/notas-fiscais 4325 1088 2121 1302 5439 6500 7000 0203 5314 1444 8132
```

A skill deve reconhecer a chave mesmo com os espaços, consultar, e responder com a nota e a análise
por categoria.

## Distribuir para outra pessoa

```bash
cd cli && npm run package
```

Gera `skill-dist/notas-fiscais/` com os quatro arquivos do caminho A, imprime o SHA-256 e avisa se a
árvore de trabalho tem alterações não commitadas — nesse caso o commit anotado no `LEIA-ME.md` não
descreve o pacote, então **commite antes de distribuir**.

O comando também imprime a linha para zipar, por sistema. Mande o zip e diga apenas: descompacte e
peça para a sua IA instalar seguindo o LEIA-ME.

`skill-dist/` é **commitado de propósito**: é o que faz a atualização por `curl` funcionar sem
nenhuma infraestrutura de release. O custo é ~950 KB no histórico por versão republicada; se isso
incomodar algum dia, a alternativa é publicar o pacote como asset de GitHub Release e apontar as
URLs de atualização para a tag.

## Configuração opcional

Nada abaixo é necessário: todos têm default de produção, e a CLI funciona sem nenhum `.env`.

No caminho B, copie `cli/.env.example` para `cli/.env`. No caminho A, defina como variável de
ambiente.

| Variável | Default | Para quê |
|----------|---------|----------|
| `SEFAZ_URL` | endpoint público do SEFAZ-RS | Apontar para outro endpoint — é como os testes usam um servidor local |
| `SEFAZ_TIMEOUT_MS` | `15000` | Rede lenta |
| `CLI_CONCURRENCY` | `3` | Consultas simultâneas ao SEFAZ |
| `CNPJ_API_URL` | `https://brasilapi.com.br/api/cnpj/v1/` | Serviço que resolve CNPJ para nome fantasia e CNAE |
| `CNPJ_LOOKUP` | ligado | `off` desliga a consulta de cadastro; `TradeName`, `Cnae` e `Segment` vêm sempre `null` |
| `CNPJ_CACHE` | ligado | `off` desliga o cache em disco; cada invocação volta a consultar os CNPJs |
| `CNPJ_CACHE_PATH` | `~/.extrator-nfe/cnpj.json` | Outro local para o arquivo de cache |
| `CNPJ_CACHE_TTL_DAYS` | `30` | Prazo de validade das entradas do cache |

### O cache de CNPJ

O `scan` e o `full` são invocações separadas — é essa separação que permite decidir no meio do
caminho quais notas analisar. Sem persistência, cada CNPJ seria consultado duas vezes no mesmo
fluxo, então o cache não é otimização: é o que torna o fluxo de dois passos viável.

O arquivo é um JSON só, em `~/.extrator-nfe/cnpj.json`, e guarda **apenas dado público de cadastro**
indexado por CNPJ: nome fantasia, razão social e CNAE. Nunca a chave DANFE, nunca valor, nunca item
— as chaves são compras vinculadas ao seu CPF, enquanto o cadastro de um CNPJ é informação aberta da
Receita Federal. É essa distinção que mantém o arquivo inofensivo.

Apagar o arquivo é seguro: a próxima consulta o reconstrói. `CNPJ_CACHE=off` desliga tudo.

`cli/.env` está no `.gitignore`.

## Rodar os testes

Só no caminho B.

```bash
cd cli
npm test          # type-check + build + 171 testes, sem tocar a internet
npm run test:e2e  # inclui a consulta real ao SEFAZ (ver etapa 4.5)
```

Detalhes em [etapa-4-testes.md](etapa-4-testes.md).

## Problemas comuns

| Sintoma | Causa provável | O que fazer |
|---------|----------------|-------------|
| A skill não aparece com `/` | Pasta da skill fora de `~/.claude/skills/`, ou Claude Code aberto fora do repositório | Ver o caminho A ou B |
| `node` não reconhecido | Node não instalado, ou terminal aberto antes da instalação | Ver [Se o Node não estiver instalado](#se-o-node-não-estiver-instalado) e **reabrir o terminal** |
| `Cannot find module ... dist/index.js` | Caminho B sem compilar | `cd cli && npm install && npm run build` |
| `npm warn EBADENGINE` no install | Node abaixo de 20 | Atualizar o Node; abaixo de 20 o `joi` não é suportado |
| `"Code":"UNSUPPORTED_UF"` | Chave de outro estado | Só RS (chave começando em `43`) é suportado, por decisão de escopo |
| `"Code":"NOT_FOUND"` em todas as chaves | Chaves digitadas errado, ou notas fora da base | Conferir dígito a dígito; o SEFAZ responde isso para qualquer chave bem formada que ele não conheça |
| `"Code":"FETCH_ERROR"` | Sem rede, proxy ou SEFAZ fora do ar | Testar `curl -I https://www.sefaz.rs.gov.br`; a CLI já tenta duas vezes |
| `"Code":"PARSE_ERROR"` | A página do SEFAZ mudou de estrutura | A `Message` detalha o que faltou; `npm run test:e2e` confirma |
| `TradeName` sempre `null` | `CNPJ_LOOKUP=off`, ou BrasilAPI fora do ar | É degradação prevista: a nota continua válida e a apresentação usa a razão social |
| `Segment` sempre `null` no `scan` | mesma causa acima | As notas aparecem como *ramo não identificado* e seguem analisáveis; só o filtro por ramo fica indisponível |
| `aviso: cache de CNPJ indisponível` | sem permissão de escrita em `~`, ou disco cheio | A CLI segue sem cache, consultando de novo a cada invocação; `CNPJ_CACHE_PATH` aponta para outro lugar |
