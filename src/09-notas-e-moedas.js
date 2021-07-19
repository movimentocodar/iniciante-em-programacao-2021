import cedulas from "./07-cedulas";

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
  // Implemente sua solução aqui :)
  let notas = [[100, 50, 20, 10, 5, 2], [0, 0, 0, 0, 0, 0]];
  let cedulas = []
  let v = valor;
  let loop = 0;
  let splited = String(valor).split('.')
  let zeroum = false;
  if (splited[1] == '01'){
    v = Math.round(v);
    zeroum = true;
  }
  while (true){
    v = v.toFixed(2)
    if (v > 1.99){
      v -= notas[0][loop];
      notas[1][loop] += 1
      if (v < 0){
        v += notas[0][loop];
        notas[1][loop] -= 1
        loop += 1;
      }
    }else if (v != 0 && v < 2 && v != 1){
      v *=100
      for (let i = 0; i < notas[1].length; i++){
        cedulas[i] = notas[1][i];
      }
      notas = [[100, 50, 25, 10, 5, 1], [0, 0, 0, 0, 0, 0]];
      loop = 0;
    }else if (v == 1){
      if (zeroum == true){
        for (let i = 0; i < notas[1].length; i++){
          cedulas[i] = notas[1][i];
        }
        notas[1] = [1, 0, 0, 0, 0, 1]
        break
      }else{
        v -= notas[0][loop];
      notas[1][loop] += 1
      break;
      }
    }else{
      for (let i = 0; i < notas[1].length; i++){
        cedulas[i] = notas[1][i];
      }
      notas = [[100, 50, 25, 10, 5, 1], [0, 0, 0, 0, 0, 0]];
      break;
    }
  }
  return `NOTAS:
`+cedulas[0]+` nota(s) de R$ 100.00
`+cedulas[1]+` nota(s) de R$ 50.00
`+cedulas[2]+` nota(s) de R$ 20.00
`+cedulas[3]+` nota(s) de R$ 10.00
`+cedulas[4]+` nota(s) de R$ 5.00
`+cedulas[5]+` nota(s) de R$ 2.00
MOEDAS:
`+notas[1][0]+` moeda(s) de R$ 1.00
`+notas[1][1]+` moeda(s) de R$ 0.50
`+notas[1][2]+` moeda(s) de R$ 0.25
`+notas[1][3]+` moeda(s) de R$ 0.10
`+notas[1][4]+` moeda(s) de R$ 0.05
`+notas[1][5]+` moeda(s) de R$ 0.01`
}
