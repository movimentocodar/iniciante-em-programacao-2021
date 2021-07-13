import numeracaoRomana from '../src/04-numeracao-romana'

describe('04-numeracao-romana', () => {
  it('deve retornar numeração romana corretamente para o caso de teste 1', () => {
    expect(numeracaoRomana(666)).toBe('DCLXVI')
  })

  it('deve retornar numeração romana corretamente para o caso de teste 2', () => {
    expect(numeracaoRomana(83)).toBe('LXXXIII')
  })

  it('deve retornar numeração romana corretamente para o caso de teste 3', () => {
    expect(numeracaoRomana(999)).toBe('CMXCIX')
  })
})
