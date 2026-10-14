/**
 * Silencia o progresso que a CLI escreve no stderr durante os testes.
 *
 * Só o `process.stderr.write` da aplicação é interceptado, e sempre restaurado no `afterAll`: o
 * relatório do Jest sai depois disso e continua visível.
 */
export function silenceProgress(): void {
    let spy: jest.SpyInstance | undefined

    beforeAll(() => {
        spy = jest.spyOn(process.stderr, "write").mockImplementation(() => true)
    })

    afterAll(() => {
        spy?.mockRestore()
    })
}
