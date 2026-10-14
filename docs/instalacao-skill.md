# Instalação da skill

Como deixar `/notas-fiscais` funcionando numa máquina nova. Para o que a skill faz, veja
[.claude/skills/notas-fiscais/SKILL.md](../.claude/skills/notas-fiscais/SKILL.md).

## Requisitos

- **Node.js 20 ou superior** (`node --version`). O piso é 20 porque a dependência `joi` declara
  `engines: { node: ">= 20" }`; o `package.json` da CLI declara o mesmo, então o `npm install`
  avisa em vez de falhar adiante por motivo obscuro.
- **npm**, que acompanha o Node.
- Acesso à internet para `https://www.sefaz.rs.gov.br`, de onde vêm as notas, e para
  `https://brasilapi.com.br`, que resolve o CNPJ do emitente em nome fantasia. O segundo é
  opcional: com `CNPJ_LOOKUP=off` a CLI usa só a razão social impressa na nota.

Não precisa de Python, Docker, banco de dados nem chave de API. A consulta é pública e não
autenticada.

## Se o Node não estiver instalado

Sem Node, nada funciona: a skill não tem como consultar e falha com `node: command not found` (ou
`O termo 'node' não é reconhecido` no PowerShell). A skill detecta isso no Passo 0 e para com uma
mensagem clara, em vez de tentar instalar sozinha.

É possível ter o Claude Code sem ter Node — ele é distribuído também como binário nativo e como
aplicativo de desktop. Quem instalou o Claude Code via npm já tem Node, e provavelmente numa versão
recente.

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

Três razões, em ordem de peso:

1. **Não compensa.** Pelo problema do `PATH` acima, instalar no meio da sessão não destrava a
   consulta em andamento: o `node` só aparece no terminal seguinte. O usuário teria de reabrir o
   terminal e repetir o pedido de qualquer forma.
2. **É instalar software na máquina de alguém.** Decisão do usuário, não de uma skill de consulta de
   nota fiscal — e em alguns caminhos exige elevação.
3. **Pode atropelar o que já existe.** Quem usa `nvm`, `fnm` ou `volta` tem o Node sob
   gerenciamento de versão; uma instalação paralela via `winget` costuma brigar por precedência no
   `PATH` e produz um "mas eu tenho Node 22" que não se sustenta.

Se você pedir explicitamente, a skill roda o comando — ela só não faz isso por iniciativa própria.

### E se eu não quiser instalar Node?

As alternativas existem, mas custam caro:

- **Consultar sem a CLI** (a skill faria o POST com `curl` e leria o HTML ela mesma) elimina a
  dependência, e com ela tudo o que a CLI garante: a extração deixa de ser determinística, cada nota
  joga de 16 a 30 KB de HTML no contexto, a suíte de 100 testes perde objeto e o caso de uso
  principal — vários DANFEs de uma vez — fica inviável.
- **Distribuir um executável único** (via `node --experimental-sea-config`, `bun build --compile` ou
  `deno compile`) resolveria de verdade para quem *recebe* o programa, mas quem **gera** o binário
  precisa de Node. Faz sentido se um dia a skill for distribuída a terceiros; não ajuda quem está
  instalando a partir do código-fonte.

## 1. Clonar e compilar

```bash
git clone <url-do-repositorio> Extrator-Notas-Fiscais
cd Extrator-Notas-Fiscais/cli
npm install
npm run build
```

O `build` gera `cli/dist/`, que é o que a skill executa. `dist/` e `node_modules/` não entram no
git, então **toda cópia nova precisa deste passo** — ou deixa a própria skill fazê-lo na primeira
consulta, avisando que vai demorar mais (é o comportamento previsto na
[etapa 3](etapa-3-skill.md)).

Conferir que funcionou, da raiz do repositório:

```bash
node cli/dist/index.js 43251088212113025439650070000203531414448132
```

Saída esperada: uma linha de JSON no stdout com `"Valid":true`, e o progresso no stderr. Se vier
`"Code":"NOT_FOUND"`, a CLI está funcionando — é a nota que não está mais na base.

## 2. Instalar a skill

O Claude Code carrega skills de `.claude/skills/<nome>/SKILL.md`. Há dois modos, e a diferença
prática é de onde você vai usar.

### Modo projeto (recomendado)

Abrir o Claude Code **nesta pasta**. A skill já está em `.claude/skills/notas-fiscais/` e é
reconhecida sem nenhuma configuração: `/notas-fiscais` fica disponível, e o caminho
`cli/dist/index.js` resolve direto.

Nada a fazer além do passo 1.

### Modo global (usar de qualquer pasta)

```bash
# Linux/macOS
cp -r .claude/skills/notas-fiscais ~/.claude/skills/

# Windows (PowerShell)
Copy-Item -Recurse .claude\skills\notas-fiscais $HOME\.claude\skills\
```

A cópia precisa saber onde o repositório está, porque a CLI não vai com ela. Defina
`EXTRATOR_NFE_HOME` apontando para a raiz do repositório — a skill procura a CLI nessa variável
antes de tentar o caminho relativo:

```bash
# Linux/macOS: no ~/.bashrc ou ~/.zshrc
export EXTRATOR_NFE_HOME="$HOME/Codigos/Extrator-Notas-Fiscais"
```

```powershell
# Windows: permanente, para o usuário atual
[Environment]::SetEnvironmentVariable("EXTRATOR_NFE_HOME", "C:\Users\voce\Documents\Codigos\Extrator-Notas-Fiscais", "User")
```

Reabra o terminal depois de definir, e confirme com `echo $EXTRATOR_NFE_HOME` (ou
`$env:EXTRATOR_NFE_HOME` no PowerShell).

> No modo global, a cópia em `~/.claude/skills/` **não** acompanha atualizações do repositório.
> Depois de um `git pull` que mexa na skill, copie de novo.

## 3. Verificar

No Claude Code, dentro do diretório escolhido:

```
/notas-fiscais 4325 1088 2121 1302 5439 6500 7000 0203 5314 1444 8132
```

A skill deve reconhecer a chave mesmo com os espaços, consultar, e responder com a nota e a análise
por categoria.

## Configuração opcional

Nada abaixo é necessário: todos têm default de produção, e a CLI funciona sem nenhum `.env`.

Para alterar, copie `cli/.env.example` para `cli/.env`:

| Variável | Default | Para quê |
|----------|---------|----------|
| `SEFAZ_URL` | endpoint público do SEFAZ-RS | Apontar para outro endpoint — é como os testes usam um servidor local |
| `SEFAZ_TIMEOUT_MS` | `15000` | Rede lenta |
| `CLI_CONCURRENCY` | `3` | Consultas simultâneas ao SEFAZ |
| `CNPJ_API_URL` | `https://brasilapi.com.br/api/cnpj/v1/` | Serviço que resolve CNPJ → nome fantasia |
| `CNPJ_LOOKUP` | ligado | `off` desliga a consulta de nome fantasia; `TradeName` vem sempre `null` e a apresentação usa a razão social |

`cli/.env` está no `.gitignore`.

## Rodar os testes

```bash
cd cli
npm test          # type-check + build + 100 testes, sem tocar a internet
npm run test:e2e  # inclui a consulta real ao SEFAZ (ver etapa 4.5)
```

Detalhes em [etapa-4-testes.md](etapa-4-testes.md).

## Problemas comuns

| Sintoma | Causa provável | O que fazer |
|---------|----------------|-------------|
| A skill não aparece com `/` | Claude Code aberto fora do repositório, ou cópia global ausente | Ver o passo 2 |
| `Cannot find module ... dist/index.js` | Falta compilar | `cd cli && npm install && npm run build` |
| `"Code":"UNSUPPORTED_UF"` | Chave de outro estado | Só RS (chave começando em `43`) é suportado, por decisão de escopo |
| `"Code":"NOT_FOUND"` em todas as chaves | Chaves digitadas errado, ou notas fora da base | Conferir dígito a dígito; o SEFAZ responde isso para qualquer chave bem formada que ele não conheça |
| `"Code":"FETCH_ERROR"` | Sem rede, proxy ou SEFAZ fora do ar | Testar `curl -I https://www.sefaz.rs.gov.br`; a CLI já tenta duas vezes |
| `"Code":"PARSE_ERROR"` | A página do SEFAZ mudou de estrutura | É o cenário que a `Message` detalha; rodar `npm run test:e2e` confirma |
| `npm test` falha no `typecheck` | Versão de Node ou dependências desatualizadas | `npm install` de novo; conferir `node --version` |
| `node: command not found` / `'node' não é reconhecido` | Node não instalado, ou terminal aberto antes da instalação | Ver [Se o Node não estiver instalado](#se-o-node-não-estiver-instalado) e **reabrir o terminal** |
| `npm warn EBADENGINE` no install | Node abaixo de 20 | Atualizar o Node; abaixo de 20 o `joi` não é suportado |
