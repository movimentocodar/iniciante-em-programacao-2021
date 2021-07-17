/**
 * A função abaixo recebe um valor com duas casas decimais. Este valor representa um valor monetário.
 * Ela deve retornar o menor número de notas e moedas possíveis no qual o valor pode ser decomposto.
 * As notas consideradas são de 100, 50, 20, 10, 5, 2.
 * As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01.
 *
 * Exemplo:
 * - Para valor = 576.73
 * - Deve retornar:
 * NOTAS:
 * 5 nota(s) de R$ 100.00
 * 1 nota(s) de R$ 50.00
 * 1 nota(s) de R$ 20.00
 * 0 nota(s) de R$ 10.00
 * 1 nota(s) de R$ 5.00
 * 0 nota(s) de R$ 2.00
 * MOEDAS:
 * 1 moeda(s) de R$ 1.00
 * 1 moeda(s) de R$ 0.50
 * 0 moeda(s) de R$ 0.25
 * 2 moeda(s) de R$ 0.10
 * 0 moeda(s) de R$ 0.05
 * 3 moeda(s) de R$ 0.01
 */

import { getValorNotas } from './07-cedulas'

export default function notasEMoedas (valor) {
  const { nota100, nota50, nota20, nota10, nota5, nota2, nota1 } = getValorNotas(Math.floor(valor))
  let moedas = parseInt((valor.toFixed(2) + '').split('.')[1])
  const moeda50 = Math.floor(moedas / 50)
  moedas = moedas % 50
  const moeda25 = Math.floor(moedas / 25)
  moedas = moedas % 25
  const moeda10 = Math.floor(moedas / 10)
  moedas = moedas % 10
  const moeda5 = Math.floor(moedas / 5)
  const moeda1 = moedas % 5

  return `NOTAS:
${nota100} nota(s) de R$ 100.00
${nota50} nota(s) de R$ 50.00
${nota20} nota(s) de R$ 20.00
${nota10} nota(s) de R$ 10.00
${nota5} nota(s) de R$ 5.00
${nota2} nota(s) de R$ 2.00
MOEDAS:
${nota1} moeda(s) de R$ 1.00
${moeda50} moeda(s) de R$ 0.50
${moeda25} moeda(s) de R$ 0.25
${moeda10} moeda(s) de R$ 0.10
${moeda5} moeda(s) de R$ 0.05
${moeda1} moeda(s) de R$ 0.01`
}
