import rodizioVeiculos from '../src/08-rodizio-veiculos'

const caso1 = `TERÇA
SEXTA
FALHA`

const caso2 = `FALHA
FALHA
FALHA
SEGUNDA`

describe('08-rodizio-veiculos', () => {
  it('deve verificar rodízio de veículos para o caso de teste 1', () => {
    expect(rodizioVeiculos(['ABC-1234', 'XYZ-1010', 'AAA3333'])).toBe(caso1)
  })

  it('deve verificar rodízio de veículos para o caso de teste 2', () => {
    expect(rodizioVeiculos(['abc-1234', 'a-1010', 'ABCD-1234', 'AIQ-2001'])).toBe(caso2)
  })
})
