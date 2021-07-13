import idadeEmDias from '../src/05-idade-em-dias'

const caso1 = `1 ano(s)
1 mes(es)
5 dia(s)`

const caso2 = `2 ano(s)
2 mes(es)
10 dia(s)`

const caso3 = `0 ano(s)
1 mes(es)
0 dia(s)`

describe('05-idade-em-dias', () => {
  it('deve retornar idade corretamente para o caso de teste 1', () => {
    expect(idadeEmDias(400)).toBe(caso1)
  })

  it('deve retornar idade corretamente para o caso de teste 2', () => {
    expect(idadeEmDias(800)).toBe(caso2)
  })

  it('deve retornar idade corretamente para o caso de teste 3', () => {
    expect(idadeEmDias(30)).toBe(caso3)
  })
})
