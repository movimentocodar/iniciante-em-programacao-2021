
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
  // Implemente sua solução aqui :)
  var notas = [100, 50, 20, 10, 5, 2, 1];
  var resultado = [valor + "\n"];

  for (let nota of notas) {
    let qtd = valor / nota;
    resultado.push(
      `${parseInt(qtd) + " nota(s) de R$ " + nota + ",00" + "\n"}`
    );
    valor = valor % nota;
  }
  return resultado.join("").trim();
}
