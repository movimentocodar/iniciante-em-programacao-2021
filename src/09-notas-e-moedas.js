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
export default function notasEMoedas(valor) {
  const resultado = ['NOTAS:']
  const cedulasPossiveis = [100, 50, 20, 10, 5, 2]

  let valorParaCalculo = valor
  for (let i = 0; i < cedulasPossiveis.length; i++) {
    const cedula = cedulasPossiveis[i]

    const resto = calcularRestoDaDivisao(valorParaCalculo, cedula)

    const quantidadeDeCedulas = dividirInteiros(valorParaCalculo, cedula)

    resultado.push(`${quantidadeDeCedulas} nota(s) de R$ ${cedula}.00`)

    valorParaCalculo = resto
  }

  resultado.push('MOEDAS:')

  const moedasDeUmReal = dividirInteiros(valorParaCalculo, 1)

  resultado.push(`${moedasDeUmReal} moeda(s) de R$ 1.00`)

  const moedasPossiveis = [50, 25, 10, 5, 1]

  valorParaCalculo = (valor % 1) * 100

  for (let i = 0; i < moedasPossiveis.length; i++) {
    const moeda = moedasPossiveis[i]
    const resto = calcularRestoDaDivisao(valorParaCalculo, moeda)
    const quantidadeDeMoedas = dividirInteiros(valorParaCalculo, moeda)

    resultado.push(`${quantidadeDeMoedas} moeda(s) de R$ ${(moeda / 100).toFixed(2)}`)

    valorParaCalculo = resto
  }

  return resultado.join('\n')
}

function calcularRestoDaDivisao(dividendo, divisor) {
  return dividendo % divisor
}

function dividirInteiros(dividendo, divisor) {
  return Math.floor(dividendo / divisor)
}