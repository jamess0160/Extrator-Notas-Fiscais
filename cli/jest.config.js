/**
 * Transform por @swc/jest, não ts-jest.
 *
 * O projeto usa TypeScript 7 (o compilador nativo), cujo pacote npm não expõe mais a API de
 * JavaScript — `require("typescript")` devolve apenas `{ version, versionMajorMinor }`, sem
 * `transpileModule`. O ts-jest depende dessa API e declara `typescript: ">=4.3 <7"`, então é
 * incompatível por construção, não por configuração.
 *
 * Como o @swc/jest apaga os tipos sem verificá-los, o type-check dos testes é um passo separado
 * (`npm run typecheck`, via tsconfig.test.json) e roda antes do Jest no `npm test`.
 *
 * CommonJS em todo o caminho porque o package.json não tem `"type": "module"` — ver a nota na
 * etapa 2.7 dos docs.
 */
module.exports = {
    testEnvironment: "node",
    roots: ["<rootDir>/test"],
    testMatch: ["**/*.test.ts"],
    transform: {
        "^.+\.ts$": ["@swc/jest", {
            jsc: {
                parser: { syntax: "typescript" },
                target: "es2022",
            },
            module: { type: "commonjs" },
        }],
    },
}
