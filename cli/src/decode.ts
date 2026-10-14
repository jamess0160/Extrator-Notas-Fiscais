/**
 * A página do SEFAZ declara `charset=iso-8859-1`, mas os bytes servidos não acompanham a
 * declaração de forma confiável (as fixtures do repositório estão em UTF-8 válido, reconvertidas
 * ao serem salvas pelo navegador). Confiar no charset declarado corromperia as fixtures; confiar
 * em UTF-8 corromperia a página real se ela vier em latin-1.
 *
 * A decisão vem dos bytes, não da declaração: texto latin-1 com acento é sequência UTF-8
 * inválida, então uma tentativa de decodificação estrita em UTF-8 separa os dois casos sem
 * depender de header nem de `<meta>`.
 */
export function decodeHtml(buffer: Buffer): string {
    try {
        return new TextDecoder("utf-8", { fatal: true }).decode(buffer)
    } catch {
        return buffer.toString("latin1")
    }
}
