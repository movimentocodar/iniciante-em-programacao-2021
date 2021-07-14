
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
  let temp = valor;
  let notas = [0,0,0,0,0,0,0];

  while(temp){
    if(temp >= 100){
      notas[0]++;
      temp -= 100;
    }
    else if(temp >= 50){
      notas[1]++;
      temp -= 50;
    }
    else if(temp >= 20){
      notas[2]++;
      temp -= 20;
    }
    else if(temp >= 10){
      notas[3]++;
      temp -= 10;
    }
    else if(temp >= 5){
      notas[4]++;
      temp -= 5;
    }
    else if(temp >= 2){
      notas[5]++;
      temp -= 2;
    }
    else if(temp >= 1){
      notas[6]++;
      temp -= 1;
    }
  }

  return valor + "\n" + notas[0] + " nota(s) de R$ 100,00\n" + notas[1] + " nota(s) de R$ 50,00\n" + notas[2] + " nota(s) de R$ 20,00\n" + notas[3] + " nota(s) de R$ 10,00\n" + notas[4] +" nota(s) de R$ 5,00\n" + notas[5] +" nota(s) de R$ 2,00\n" + notas[6] +" nota(s) de R$ 1,00";
}
