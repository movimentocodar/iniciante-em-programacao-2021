
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
export function getValorNotas (valor) {
  const nota100 = Math.floor(valor / 100)
  valor = valor % 100
  const nota50 = Math.floor(valor / 50)
  valor = valor % 50
  const nota20 = Math.floor(valor / 20)
  valor = valor % 20
  const nota10 = Math.floor(valor / 10)
  valor = valor % 10
  const nota5 = Math.floor(valor / 5)
  valor = valor % 5
  const nota2 = Math.floor(valor / 2)
  const nota1 = valor % 2
  return { nota100, nota50, nota20, nota10, nota5, nota2, nota1 }
}

export default function cedulas (valor) {
  const valorInicial = valor
  const { nota100, nota50, nota20, nota10, nota5, nota2, nota1 } = getValorNotas(valor)
  return `${valorInicial}
${nota100} nota(s) de R$ 100,00
${nota50} nota(s) de R$ 50,00
${nota20} nota(s) de R$ 20,00
${nota10} nota(s) de R$ 10,00
${nota5} nota(s) de R$ 5,00
${nota2} nota(s) de R$ 2,00
${nota1} nota(s) de R$ 1,00`
}
