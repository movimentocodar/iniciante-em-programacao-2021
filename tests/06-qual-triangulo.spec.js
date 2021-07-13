import qualTriangulo from '../src/06-qual-triangulo'

const caso1 = 'Invalido'

const caso2 = `Valido-Isoceles
Retangulo: N`

const caso3 = `Valido-Escaleno
Retangulo: S`

describe('06-qual-triangulo', () => {
  it('deve verificar triangulo para o caso de teste 1', () => {
    expect(qualTriangulo(4, 6, 2)).toBe(caso1)
  })

  it('deve verificar triangulo para o caso de teste 2', () => {
    expect(qualTriangulo(4, 3, 3)).toBe(caso2)
  })

  it('deve verificar triangulo para o caso de teste 3', () => {
    expect(qualTriangulo(3, 4, 5)).toBe(caso3)
  })
})
