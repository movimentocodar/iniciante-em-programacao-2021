
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
  let notas = [[100, 50, 20, 10, 5, 2, 1], [0, 0, 0, 0, 0, 0, 0]];
  let v = valor;
  let loop = 0;
  while (true){
    if (v != 0){
      v -= notas[0][loop];
      notas[1][loop] += 1
      if (v < 0){
        v += notas[0][loop];
        notas[1][loop] -= 1
        loop += 1;
      }
    }else{
      break;
    }
  }
  return `` + valor + `
`+ notas[1][0] + ` nota(s) de R$ 100,00
`+ notas[1][1] + ` nota(s) de R$ 50,00
`+ notas[1][2] + ` nota(s) de R$ 20,00
`+ notas[1][3] + ` nota(s) de R$ 10,00
`+ notas[1][4] + ` nota(s) de R$ 5,00
`+ notas[1][5] + ` nota(s) de R$ 2,00
`+ notas[1][6] + ` nota(s) de R$ 1,00`
}
