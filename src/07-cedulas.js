
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
export default function cedulas (valor){
  var notas = [100, 50, 20, 10, 5, 2, 1];
  var qtdNotas = [];
  var subNotas = 0;
  
  for(var i = 0; i < notas.length; i++){
    qtdNotas[i] = parseInt((valor + subNotas) / notas[i]);
    subNotas -= (parseInt(qtdNotas[i] * notas[i]));
  }
  
  return `${valor}
${qtdNotas[0]} nota(s) de R$ 100,00
${qtdNotas[1]} nota(s) de R$ 50,00
${qtdNotas[2]} nota(s) de R$ 20,00
${qtdNotas[3]} nota(s) de R$ 10,00
${qtdNotas[4]} nota(s) de R$ 5,00
${qtdNotas[5]} nota(s) de R$ 2,00
${qtdNotas[6]} nota(s) de R$ 1,00`
}
