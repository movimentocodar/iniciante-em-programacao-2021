
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
 export default function cedulas (valor) {

  let cem = 0
  let cinquenta = 0
  let vinte = 0
  let dez = 0
  let cinco = 0
  let dois = 0
  let um = 0
  let valorInteiro = valor

    cem = parseInt(valor / 100)
    valor = (valor % 100)

    cinquenta = parseInt(valor / 50)
    valor = (valor % 50)

    vinte = parseInt(valor / 20)
    valor = (valor % 20)

    dez = parseInt(valor / 10)
    valor = (valor % 10)

    cinco = parseInt(valor / 5)
    valor = (valor % 5)

    dois = parseInt(valor / 2)
    valor = (valor % 2)

    um = parseInt(valor / 1)
    valor = (valor % 1)

  return (`${valorInteiro}\n${cem} nota(s) de R$ 100,00\n${cinquenta} nota(s) de R$ 50,00\n${vinte} nota(s) de R$ 20,00\n${dez} nota(s) de R$ 10,00\n${cinco} nota(s) de R$ 5,00\n${dois} nota(s) de R$ 2,00\n${um} nota(s) de R$ 1,00`)
  
}