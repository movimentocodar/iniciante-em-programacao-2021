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
export default function notasEMoedas(valor){
  //variáveis das Notas
  var notas = [100, 50, 20, 10, 5, 2, 1];
  var notasLength = notas.length;
  var qtdNotas = [];
  var subNotas = 0;
  
  //variáveis das Moedas
  var moedas = [100, 50, 25, 10, 5, 1];
  var moedasLength = moedas.length;
  var qtdMoedas = [];
  var subMoedas = 0;
  var valorMoedas = parseInt((((valor * 100) - (Math.floor(valor) * 100)) / 100) * 100); // multiplicando por 100 para evitar erros de cálculo do js
  
  for(var i = 0; i < notasLength; i++){
    qtdNotas[i] = parseInt((valor + subNotas) / notas[i]);
    subNotas -= (parseInt(qtdNotas[i] * notas[i]));
  }
  
  qtdMoedas[0] = qtdNotas[6];
  
  for(i = 1; i < moedasLength; i++){
    qtdMoedas[i] = parseInt((valorMoedas + subMoedas) / moedas[i]);
    subMoedas -= (parseInt(qtdMoedas[i] * moedas[i]));
  }
  
  return `NOTAS:
${qtdNotas[0]} nota(s) de R$ 100.00
${qtdNotas[1]} nota(s) de R$ 50.00
${qtdNotas[2]} nota(s) de R$ 20.00
${qtdNotas[3]} nota(s) de R$ 10.00
${qtdNotas[4]} nota(s) de R$ 5.00
${qtdNotas[5]} nota(s) de R$ 2.00
MOEDAS:
${qtdMoedas[0]} moeda(s) de R$ 1.00
${qtdMoedas[1]} moeda(s) de R$ 0.50
${qtdMoedas[2]} moeda(s) de R$ 0.25
${qtdMoedas[3]} moeda(s) de R$ 0.10
${qtdMoedas[4]} moeda(s) de R$ 0.05
${qtdMoedas[5]} moeda(s) de R$ 0.01`
}
