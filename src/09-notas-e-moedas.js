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
export default function notasEMoedas (valor) {
  
  let cem = 0
  let cinquenta = 0
  let vinte = 0
  let dez = 0
  let cinco = 0
  let dois = 0
  let umM = 0
  let cinquentaM = 0
  let vinteECintoM = 0
  let dezM = 0
  let cincoM = 0
  let umCent = 0


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

    umM = parseInt(valor / 1)
    valor = (valor % 1)

    cinquentaM = parseInt(valor / 0.5)
    valor = (valor % 0.5)

    vinteECintoM = parseInt(valor / 0.25)
    valor = (valor % 1)
    
    dezM = parseInt(valor / 0.10)
    valor = (valor % 0.10)

    cincoM = parseInt(valor / 0.05)
    valor = (valor % 0.5)
    
    umCent = parseInt(valor / 0.01)
    valor = (valor % 0.01)

  return `NOTAS:\n${cem} nota(s) de R$ 100.00\n${cinquenta} nota(s) de R$ 50.00\n${vinte} nota(s) de R$ 20.00\n${dez} nota(s) de R$ 10.00\n${cinco} nota(s) de R$ 5.00
${dois} nota(s) de R$ 2.00\nMOEDAS:\n${umM} moeda(s) de R$ 1.00\n${cinquentaM} moeda(s) de R$ 0.50\n${vinteECintoM} moeda(s) de R$ 0.25\n${dezM} moeda(s) de R$ 0.10
${cincoM} moeda(s) de R$ 0.05\n${umCent} moeda(s) de R$ 0.01`

}