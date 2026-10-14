/**
 * Roda a suite incluindo o teste de integracao real contra o SEFAZ.
 *
 * Existe como script em vez de `RUN_E2E=1 npm test` porque essa sintaxe de variavel inline nao
 * funciona no PowerShell, que e o shell padrao no Windows.
 */
const { spawnSync } = require("node:child_process")
const path = require("node:path")

const jest = path.join(__dirname, "..", "node_modules", "jest", "bin", "jest.js")

const result = spawnSync(process.execPath, [jest, ...process.argv.slice(2)], {
    stdio: "inherit",
    env: { ...process.env, RUN_E2E: "1" },
})

process.exit(result.status ?? 1)
