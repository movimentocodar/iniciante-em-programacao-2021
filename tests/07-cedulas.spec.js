import cedulas from '../src/07-cedulas'

const caso1 = `576
5 nota(s) de R$ 100,00
1 nota(s) de R$ 50,00
1 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
1 nota(s) de R$ 5,00
0 nota(s) de R$ 2,00
1 nota(s) de R$ 1,00`

const caso2 = `11257
112 nota(s) de R$ 100,00
1 nota(s) de R$ 50,00
0 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
1 nota(s) de R$ 5,00
1 nota(s) de R$ 2,00
0 nota(s) de R$ 1,00`

const caso3 = `503
5 nota(s) de R$ 100,00
0 nota(s) de R$ 50,00
0 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
0 nota(s) de R$ 5,00
1 nota(s) de R$ 2,00
1 nota(s) de R$ 1,00`

describe('07-cedulas', () => {
  it('deve calcular cédulas para o caso de teste 1', () => {
    expect(cedulas(576)).toBe(caso1)
  })

  it('deve calcular cédulas para o caso de teste 2', () => {
    expect(cedulas(11257)).toBe(caso2)
  })

  it('deve calcular cédulas para o caso de teste 3', () => {
    expect(cedulas(503)).toBe(caso3)
  })
})
