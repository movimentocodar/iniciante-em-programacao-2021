import somaValores from '../src/02-soma-de-valores'

describe('02-soma-de-valores', () => {
  it('deve somar corretamente o caso de teste 1', () => {
    expect(somaValores(10, 9)).toBe('X = 19')
  })

  it('deve somar corretamente o caso de teste 2', () => {
    expect(somaValores(-10, 4)).toBe('X = -6')
  })

  it('deve somar corretamente o caso de teste 3', () => {
    expect(somaValores(15, -7)).toBe('X = 8')
  })
})
