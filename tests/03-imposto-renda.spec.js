import impostoRenda from '../src/03-imposto-renda'

describe('03-imposto-renda', () => {
  it('deve calcular imposto de renda corretamente para o caso de teste 1', () => {
    expect(impostoRenda(3002.00)).toBe('R$ 80.36')
  })

  it('deve calcular imposto de renda corretamente para o caso de teste 2', () => {
    expect(impostoRenda(1701.12)).toBe('Isento')
  })

  it('deve calcular imposto de renda corretamente para o caso de teste 3', () => {
    expect(impostoRenda(4520.00)).toBe('R$ 355.60')
  })
})
