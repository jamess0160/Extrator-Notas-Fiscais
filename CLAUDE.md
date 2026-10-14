# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

CLI that extracts data from a Brazilian NFC-e (electronic consumer invoice) given its 44-digit
DANFE access key. It POSTs the key to the Rio Grande do Sul SEFAZ public consultation endpoint and
scrapes the returned HTML page for the issuing company, total paid value, and line items.

The end goal is a Claude Code **skill**: the user invokes it with several DANFE keys, the skill
calls this CLI once with all of them, and the CLI returns a JSON result per key.

All source lives in [cli/](cli/). There is no repository-level package; run build commands from
`cli/`. The skill itself is [.claude/skills/notas-fiscais/SKILL.md](.claude/skills/notas-fiscais/SKILL.md)
(invoked as `/notas-fiscais`); the root `skill.md` is only a pointer to it.

## Read this first

[docs/](docs/) is the plan of record. Before changing
anything, read [docs/README.md](docs/README.md) and
[docs/contrato-io.md](docs/contrato-io.md) — the latter is the I/O contract that both the CLI and
the skill are built against (argv input, PascalCase JSON envelope on stdout, logs on stderr,
error codes, exit codes). Decisions already settled live in
[docs/etapa-1-planejamento.md](docs/etapa-1-planejamento.md): RS-only scope, build-on-setup with a
first-run warning, concurrency 3, partial failure never aborts the batch, Joi for key validation
(schemas in [cli/src/schema.ts](cli/src/schema.ts)), `SEFAZ_URL` from the environment, and Jest
tests driven by a fake HTTP server that serves [cli/test/fixtures/](cli/test/fixtures/).

Item categorization and financial analysis belong to the **skill**, not the CLI — the CLI stays a
deterministic scraper and its JSON has no category field. The taxonomy is a closed list in
[docs/analise-financeira.md](docs/analise-financeira.md); read it before touching anything about
categories or analysis.

All four stages are implemented. What remains is manual: the stage 4.6 checklists (skill behaviour
and the financial analysis), which cannot be automated because the categorization is semantic.
[docs/instalacao-skill.md](docs/instalacao-skill.md) is the install guide.

## Commands

```bash
cd cli
npm install
npm run build          # tsc: src/ -> dist/
npm run build:watch
```

Run it from the **repository root**, the way the skill does:

```bash
node cli/dist/index.js <chave44> [<chave44> ...]
```

```bash
npm test                        # typecheck -> build -> jest, no internet needed
npx jest test/unit              # one directory
npx jest -t "soma todas as"     # one test by name
npm run test:e2e                # adds the real SEFAZ query (sets RUN_E2E=1)
```

`npm test` chains the build because [test/integration/cli.test.ts](cli/test/integration/cli.test.ts)
runs the **compiled** CLI as a subprocess — without it a stale `dist/` would pass green. There is no
linter or formatter.

Tests are transformed by `@swc/jest`, not `ts-jest`: TypeScript 7 is the native compiler and its npm
package no longer exposes the JavaScript API (`require("typescript")` yields only
`{ version, versionMajorMinor }`), which ts-jest needs and whose peer range excludes v7. swc strips
types without checking them, so `npm run typecheck` (via `tsconfig.test.json`) is a separate step —
the base `tsconfig.json` has `"include": ["src"]` so the build does not sweep `test/` into the
`rootDir`.

## Architecture

The pipeline is argv → validate → fetch → extract → envelope, and each step is its own module so
that stage 4 can test them apart:

| Module | Responsibility |
|--------|----------------|
| [index.ts](cli/src/index.ts) | argv, `dotenv`, usage/exit 1, the program's only stdout write |
| [BatchRunner.ts](cli/src/BatchRunner.ts) | dedupe, concurrency, envelope, per-key failure isolation |
| [ExtractNfeData.ts](cli/src/ExtractNfeData/ExtractNfeData.ts) | orchestrates one key; `run` never throws |
| [SefazClient.ts](cli/src/SefazClient.ts) | POST, timeout, one retry, byte decoding |
| [schema.ts](cli/src/schema.ts) | Joi key schema + mapping to the contract's error codes |
| [types.ts](cli/src/types.ts) | the contract types — these *are* the serialized shape |

Two invariants worth not breaking:

- **`ExtractNfeData.run` must never throw.** `BatchRunner` isolates failures as a second line of
  defense, but the design is that every failure becomes a `Valid: false` item with an `Error.Code`
  (D4). An exception escaping here would cost the whole batch over one key.
- **Validation precedes the network.** `validateDanfe` runs before any request, which is contract
  guarantee 5. The previous code validated *after* the `await`.

`Config` ([config.ts](cli/src/config.ts)) exposes `SefazUrl`, `TimeoutMs` and `Concurrency` as
**getters**, not constants: the value is resolved at use, so it does not depend on when `dotenv`
ran and tests can swap `SEFAZ_URL` between cases.

Shared text/number handling lives in [text.ts](cli/src/text.ts) (`cleanText` — HTML entities plus
whitespace collapsing) and [number.ts](cli/src/number.ts) (`parsePtBrNumber`). Any new scraped
field goes through them; the pt-BR conversion in particular must stay centralized, because
`"1.234.567,89".replace(".", "")` only replaces the first separator and yields `NaN`.

### HTML scraping approach

`dom-parser` has no CSS-selector or tree-traversal API, so the extractors work around it by
splitting `dom.rawHTML` on newlines, locating the region of interest by regex/substring, and
re-parsing that slice with `parseFromString`. Keep this pattern in mind before "fixing" the
line-based code — it is deliberate, not an oversight.

`getElementsByClassName` does match whole class tokens (`NFCCabecalho_SubTitulo` does not match
`NFCCabecalho_SubTitulo1`, and does match `"NFCCabecalho_SubTitulo NFCBold"`), so class lookups are
safe; it is the *index* into the result that is not.

- [GetDanfeValue.ts](cli/src/ExtractNfeData/GetDanfeValue.ts) — finds the line containing
  `FORMA PAGAMENTO`, walks outward to the enclosing `<table>`/`</table>` lines, re-parses that
  block, and sums the second `<td>` of every `<tr>` after the payment header row. The total comes
  from summing payment rows, not from reading a "total" field.
- [ExtractItems.ts](cli/src/ExtractNfeData/ExtractItems.ts) — matches lines against `/Item \+ .*/`
  to collect element ids, looks each up via `getElementById`, then maps the item's `<td>` cells by
  **positional index** (1=Description, 2=Quantity, 3=UN, 4=UnityValue, 5=TotalValue). Column order
  changes in the SEFAZ page break this silently.
- [GetDanfeDate.ts](cli/src/ExtractNfeData/GetDanfeDate.ts) and
  [GetDanfeCompany.ts](cli/src/ExtractNfeData/GetDanfeCompany.ts) — single fields, both of which
  throw when absent so the orchestrator can turn that into `PARSE_ERROR`.

### Three traps already paid for

These were found against the real fixtures and are easy to reintroduce:

- **CRLF vs `.`** — JavaScript's `.` does not match carriage return. The item id was read with
  `/.*id="(.*)".*/`, which left the trailing CR glued to the captured id, so `getElementById` never
  found the row and every valid note became `PARSE_ERROR`. Any new line-based regex over `rawHTML`
  has to account for the CR.
- **`Data de Emissão` vs `Data/Hora da Consulta`** — the page carries both, and the consultation
  timestamp appears *earlier* in the HTML (inside a JavaScript string). Anchor on the literal
  `Data de Emissão`, and note that the emission date sits in the same
  `NFCCabecalho_SubTitulo` class that `Company` reads at index `[0]`, so positional indexing cannot
  tell them apart. The ISO string is built by string concatenation on purpose: `new Date()` would
  apply the machine's timezone and shift the time printed on the note.
- **Not found is HTTP 200** — the SEFAZ answers a missing note with a normal page whose `<script>`
  holds `alert('M230 - Documento Fiscal (NFC-e) inexistente ...')`. There is no error status to
  detect, so detection is by body sentinel, and the retry logic must not treat it as transient.

Charset is decided from the bytes, not the declaration ([decode.ts](cli/src/decode.ts)). Three
things disagree: the page declares `iso-8859-1`, the saved fixtures are valid UTF-8, and the live
endpoint actually serves latin-1 with **no charset in the header at all** (verified: 40 non-ASCII
bytes, `0xE3` for `ã`, invalid as UTF-8). A strict UTF-8 attempt with a latin-1 fallback is the only
rule that handles fixture and production at once.

## Notes

- Error messages and the SEFAZ sentinel strings are in Portuguese; keep user-facing strings in pt-BR.
- `tsconfig.json` is strict (`strict`, `exactOptionalPropertyTypes`, `isolatedModules`,
  `moduleDetection: force`) and targets `nodenext`/`esnext`. Several stricter lint-style flags
  (`noUnusedLocals`, `noImplicitReturns`, …) are commented out rather than deleted.
- Only SEFAZ-RS is supported. The first 2 digits of a DANFE key are the UF code (`43` = RS); keys
  from other states must be rejected before any request, not sent to the RS endpoint.
- The scraper depends on a third-party government HTML page. Breakage now surfaces as
  `PARSE_ERROR` with the thrown message in `Error.Message` ("Linha pai não encontrada!", "Item com
  id ... não encontrado", "Data de emissão não encontrada na página") rather than as a crash.
- Do **not** add `"type": "module"` to `cli/package.json`. With `module: nodenext` and no such
  field, TypeScript emits CommonJS, which is what keeps the stage-4 Jest setup trivial (and what
  `__dirname` in [index.ts](cli/src/index.ts) relies on).
- `dotenv.config({ quiet: true })` in [index.ts](cli/src/index.ts) is load-bearing, not cosmetic:
  without `quiet` dotenv writes a banner to **stdout**, which the contract reserves for the JSON
  alone. For the same reason `index.ts` sets `process.exitCode` instead of calling `process.exit`,
  which can truncate a piped stdout.
