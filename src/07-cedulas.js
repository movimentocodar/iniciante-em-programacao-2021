
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
  let aux = valor
  let notas = [0,0,0,0,0,0,0];
  let dinheiros = [100,50,20,10,5,2,1]
  for(let c = 0; c < 7; c++){
    if(aux >= dinheiros[c]){
      notas[c] = Math.floor(aux/dinheiros[c]);
      aux -= notas[c] * dinheiros[c];
    }
  }

  return valor + "\n" + notas[0] + " nota(s) de R$ 100,00\n" + notas[1] + " nota(s) de R$ 50,00\n" + notas[2] + " nota(s) de R$ 20,00\n" + notas[3] + " nota(s) de R$ 10,00\n" + notas[4] +" nota(s) de R$ 5,00\n" + notas[5] +" nota(s) de R$ 2,00\n" + notas[6] +" nota(s) de R$ 1,00";
}
