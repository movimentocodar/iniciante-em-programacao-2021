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
  let cedulas = [100, 50, 20, 10, 5, 2];
  let moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];
  let texto = ``;

  texto = `NOTAS:`;
  for(let i = 0; i < cedulas.length; i++){
    texto += `\n`;
    texto += `${parseInt(valor/cedulas[i])} nota(s) de R$ ${cedulas[i]}.00`;
    valor = valor % cedulas[i];
  }
  texto += `\nMOEDAS:`;
  for(let j = 0; j < moedas.length; j++){
    texto += `\n${parseInt(valor/moedas[j])} moeda(s) de R$ ${moedas[j].toFixed(2)}`;
    valor = valor % moedas[j];
  }
  return texto;
}
