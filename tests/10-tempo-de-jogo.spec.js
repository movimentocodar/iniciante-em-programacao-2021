import tempoDeJogo from '../src/10-tempo-de-jogo'

describe('10-tempo-de-jogo', () => {
  it('deve verificar tempo de jogo para o caso de teste 1', () => {
    expect(tempoDeJogo(7, 8, 9, 10)).toBe('O JOGO DUROU 2 HORA(S) E 2 MINUTO(S)')
  })

  it('deve verificar tempo de jogo para o caso de teste 2', () => {
    expect(tempoDeJogo(7, 7, 7, 7)).toBe('O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)')
  })

  it('deve verificar tempo de jogo para o caso de teste 3', () => {
    expect(tempoDeJogo(7, 10, 8, 9)).toBe('O JOGO DUROU 0 HORA(S) E 59 MINUTO(S)')
  })
})
