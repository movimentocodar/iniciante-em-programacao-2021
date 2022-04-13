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
  // Implemente sua solução aqui :)

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

/**
 export default function notasEMoedas(valor) {
  // Implemente sua solução aqui :)

  const restoPorCem = calcularRestoDaDivisao(valor, 100)
  const restoPorCinquenta = calcularRestoDaDivisao(restoPorCem, 50)
  const restoPorVinte = calcularRestoDaDivisao(restoPorCinquenta, 20)
  const restoPorDez = calcularRestoDaDivisao(restoPorVinte, 10)
  const restoPorCinco = calcularRestoDaDivisao(restoPorDez, 5)
  const restoPorDois = calcularRestoDaDivisao(restoPorCinco, 2)

  const notasDeCem = dividirInteiros(valor, 100)
  const notasDeCinquenta = dividirInteiros(restoPorCem, 50)
  const notasDeVinte = dividirInteiros(restoPorCinquenta, 20)
  const notasDeDez = dividirInteiros(restoPorVinte, 10)
  const notasDeCinco = dividirInteiros(restoPorDez, 5)
  const notasDeDois = dividirInteiros(restoPorCinco, 2)
  const moedasDeUmReal = dividirInteiros(restoPorDois, 1)

  const valorParaMoedas = (valor % 1) * 100
  const restoPorCinquentaMoeda = calcularRestoDaDivisao(valorParaMoedas, 50)
  const restoPorVinteCincoMoeda = calcularRestoDaDivisao(restoPorCinquentaMoeda, 25)
  const restoPorDezMoeda = calcularRestoDaDivisao(restoPorVinteCincoMoeda, 10)
  const restoPorCincoMoeda = calcularRestoDaDivisao(restoPorDezMoeda, 5)

  const moedasDeCinquenta = dividirInteiros(valorParaMoedas, 50)
  const moedasDeVinteCinco = dividirInteiros(restoPorCinquentaMoeda, 25)
  const moedasDeDez = dividirInteiros(restoPorVinteCincoMoeda, 10)
  const moedasDezCinco = dividirInteiros(restoPorDezMoeda, 5)
  const moedasDeUmCentavo = dividirInteiros(restoPorCincoMoeda, 1)

  return `NOTAS:
${notasDeCem} nota(s) de R$ 100.00
${notasDeCinquenta} nota(s) de R$ 50.00
${notasDeVinte} nota(s) de R$ 20.00
${notasDeDez} nota(s) de R$ 10.00
${notasDeCinco} nota(s) de R$ 5.00
${notasDeDois} nota(s) de R$ 2.00
MOEDAS:
${moedasDeUmReal} moeda(s) de R$ 1.00
${moedasDeCinquenta} moeda(s) de R$ 0.50
${moedasDeVinteCinco} moeda(s) de R$ 0.25
${moedasDeDez} moeda(s) de R$ 0.10
${moedasDezCinco} moeda(s) de R$ 0.05
${moedasDeUmCentavo} moeda(s) de R$ 0.01`
}
 */
