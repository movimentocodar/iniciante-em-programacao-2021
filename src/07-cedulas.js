
/**
 * A função abaixo recebe um valor inteiro. Este valor representa um valor monetário (apenas notas).
 * Ela deve retornar o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto.
 * As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1.
 *
 * Exemplo:
 * - Para valor = 576
 * - Deve retornar:
 *
 * 576
 * 5 nota(s) de R$ 100,00
 * 1 nota(s) de R$ 50,00
 * 1 nota(s) de R$ 20,00
 * 0 nota(s) de R$ 10,00
 * 1 nota(s) de R$ 5,00
 * 0 nota(s) de R$ 2,00
 * 1 nota(s) de R$ 1,00
 */
export default function cedulas(valor) {
  // Implemente sua solução aqui :)

  const cedulasPossiveis = [100, 50, 20, 10, 5, 2, 1]

  let i = 0
  let len = cedulasPossiveis.length
  let valorParaCalculo = valor

  const resultado = [valor]

  for (i; i < len; i++) {
    const cedula = cedulasPossiveis[i]
    
    const resto = calcularRestoDaDivisao(valorParaCalculo, cedula)
    
    const quantidadeDeCedulas = dividirInteiros(valorParaCalculo, cedula)

    resultado.push(`${quantidadeDeCedulas} nota(s) de R$ ${cedula},00`)
    
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
export default function cedulas(valor) {
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
  const notasDeUm = dividirInteiros(restoPorDois, 1)

  return `${valor}
  ${notasDeCem} nota(s) de R$ 100,00
  ${notasDeCinquenta} nota(s) de R$ 50,00
  ${notasDeVinte} nota(s) de R$ 20,00
  ${notasDeDez} nota(s) de R$ 10,00
  ${notasDeCinco} nota(s) de R$ 5,00
  ${notasDeDois} nota(s) de R$ 2,00
  ${notasDeUm} nota(s) de R$ 1,00`
}*/
