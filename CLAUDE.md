# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

CLI that extracts data from a Brazilian NFC-e (electronic consumer invoice) given its 44-digit
DANFE access key. It POSTs the key to the Rio Grande do Sul SEFAZ public consultation endpoint and
scrapes the returned HTML page for the issuing company, total paid value, and line items.

The end goal is a Claude Code **skill**: the user invokes it with several DANFE keys, the skill
calls this CLI once with all of them, and the CLI returns a JSON result per key.

All source lives in [cli/](cli/). There is no repository-level package; run commands from `cli/`.

## Read this first

The project is in the planning stage and [docs/](docs/) is the plan of record. Before changing
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

Current code predates the contract and does not implement it yet.

## Commands

No npm scripts are defined beyond the placeholder `test`. Use the toolchain directly:

```bash
cd cli
npm install
npx tsc              # compile src/ -> dist/ (rootDir/outDir from tsconfig.json)
npx tsc --watch
node dist/index.js   # run; the DANFE key is currently hardcoded in src/index.ts
```

There is no test runner, linter, or formatter configured. `npm test` intentionally exits 1.

## Architecture

Entry point [cli/src/index.ts](cli/src/index.ts) instantiates `ExtractNfeData` and calls `run(danfe)`.

`ExtractNfeData.run()` ([cli/src/ExtractNfeData/ExtractNfeData.ts](cli/src/ExtractNfeData/ExtractNfeData.ts))
is the orchestrator and the only place that touches the network or validation:

1. `getDanfeData` — `axios.post` of `chaveNFe` + `HML=false` as `application/x-www-form-urlencoded`
   to `SAT-WEB-NFE-NFC_2.asp`, returning the raw HTML string.
2. `isDanfeValid` — rejects keys whose length is not 44, and detects the SEFAZ "inexistente na base
   de dados" sentinel string in the response body.
3. Parses once with `dom-parser`'s `parseFromString`, then delegates to the two extractor classes.

The return type is a discriminated union on `Valid` (`DanfeData | DanfeError`), so callers must
narrow on `Valid` before reading `Company`/`Value`/`Items`.

### HTML scraping approach

`dom-parser` has no CSS-selector or tree-traversal API, so both extractors work around it by
splitting `dom.rawHTML` on newlines, locating the region of interest by regex/substring, and
re-parsing that slice with `parseFromString`. Keep this pattern in mind before "fixing" the
line-based code — it is deliberate, not an oversight.

- [GetDanfeValue.ts](cli/src/ExtractNfeData/GetDanfeValue.ts) — finds the line containing
  `FORMA PAGAMENTO`, walks outward to the enclosing `<table>`/`</table>` lines, re-parses that
  block, and sums the second `<td>` of every `<tr>` after the payment header row. The total comes
  from summing payment rows, not from reading a "total" field.
- [ExtractItems.ts](cli/src/ExtractNfeData/ExtractItems.ts) — matches lines against `/Item \+ .*/`
  to collect element ids, looks each up via `getElementById`, then maps the item's `<td>` cells by
  **positional index** (1=Description, 2=Quantity, 3=UN, 4=UnityValue, 5=TotalValue). Column order
  changes in the SEFAZ page break this silently.

Both extractors convert pt-BR numeric strings to numbers by stripping `.` thousands separators and
swapping `,` for `.`. Any new numeric field needs the same treatment.

### Known inconsistency

[cli/src/types.ts](cli/src/types.ts) declares a `CliTypes` namespace (`Result`, `NfItem` with
`Name`/`UnitaryValue`) that nothing imports. The types actually in use are `DanfeData` / `NfeItem`
exported from `ExtractNfeData.ts`, which use different field names. Prefer the `ExtractNfeData.ts`
types; `types.ts` is stale and a candidate for removal or reconciliation.

## Notes

- Error messages and the SEFAZ sentinel strings are in Portuguese; keep user-facing strings in pt-BR.
- `tsconfig.json` is strict (`strict`, `exactOptionalPropertyTypes`, `isolatedModules`,
  `moduleDetection: force`) and targets `nodenext`/`esnext`. Several stricter lint-style flags
  (`noUnusedLocals`, `noImplicitReturns`, …) are commented out rather than deleted.
- Only SEFAZ-RS is supported. The first 2 digits of a DANFE key are the UF code (`43` = RS); keys
  from other states must be rejected before any request, not sent to the RS endpoint.
- The scraper depends on a third-party government HTML page. Breakage is most likely to surface as a
  thrown "Linha pai não encontrada!" / "Item com id ... não encontrado", or as zeroed numbers.
