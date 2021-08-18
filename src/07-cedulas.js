
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

  const cedulasPossiveis = [100, 50, 20, 10, 5, 2, 1]

  let i = 0;
  let len = cedulasPossiveis.length;
  let valorCalculado = valor;

  const resultado = [valor]

  for (i; i < len; i++) {
    const cedula = cedulasPossiveis[i]

    const resto = calcularRestoDaDivisao(valorCalculado, cedula)

    const quantidadeDeCedulas = dividirInteiros(valorCalculado, cedula)

    resultado.push(`${quantidadeDeCedulas} nota(s) de R$ ${cedula},00`)

    valorCalculado = resto
  }

  return resultado.join('\n')
}

function calcularRestoDaDivisao(dividendo, divisor) {
  return dividendo % divisor
}

function dividirInteiros(dividendo, divisor) {
  return Math.floor(dividendo / divisor)
}
