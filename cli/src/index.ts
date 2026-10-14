import { ExtractNfeData } from "./ExtractNfeData/ExtractNfeData"

async function main() {
    const extractNfeData = new ExtractNfeData()

    console.log(await extractNfeData.run("43251088212113025439650070000203531414448132"))
}

main().then(() => {
    process.exit(0)
})