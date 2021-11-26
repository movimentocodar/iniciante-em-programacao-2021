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
export default function notasEMoedas(valor) {
  // Implemente sua solução aqui :)

  var notas = [100, 50, 20, 10, 5, 2];
  var moedas = [1, 0.5, 0.25, 0.1, 0.05, 0.01];
  var totalNotas = [];
  var totalMoedas = [];
  var notasEMoedas = [];

  notas.forEach((nota) => {
    let qtd = valor.toFixed(2) / nota;
    totalNotas.push(
      parseInt(qtd).toString() + " nota(s) de R$ " + nota.toFixed(2)
    );
    valor = valor.toFixed(2) % nota;
  });

  moedas.forEach((moeda) => {
    let qtd = valor.toFixed(2) / moeda;
    totalMoedas.push(
      parseInt(qtd).toString() + " moeda(s) de R$ " + moeda.toFixed(2)
    );
    valor = valor.toFixed(2) % moeda;
  });

  totalNotas.unshift("NOTAS:");
  totalMoedas.unshift("MOEDAS:");
  notasEMoedas = totalNotas.concat(totalMoedas);

  return notasEMoedas.join("\n").toString();
}
