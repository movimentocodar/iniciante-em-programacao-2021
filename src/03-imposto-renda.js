/**
 * Em um país imaginário denominado Lisarb, todos os habitantes ficam felizes em pagar seus impostos,
 * pois sabem que nele não existem políticos corruptos e os recursos arrecadados são utilizados em benefício da população,
 * sem qualquer desvio.
 *
 * A moeda deste país é o Rombus, cujo símbolo é o R$.
 *
 * O Imposto de Renda segue a tabela abaixo:
 *
 * Renda                    |    Imposto
 * -------------------------------------
 * de    0.00 a 2000.00     |    Isento
 * de 2000.01 a 3000.00     |     8 %
 * de 3000.01 a 4500.00     |    18 %
 * acima de     4500.00     |    28 %
 *
 * A função abaixo recebe um `valor` numérico com casas decimais e deve retornar o valor do imposto (com R$ e duas casas decimais)
 * ou 'Isento' (caso não tenha imposto para pagar).
 *
 * Exemplo:
 * - Se valor = 3002.00
 * - Deve retornar 'R$ 80.36' (8% sobre R$ 1000.00 + 18% sobre R$ 2.00. A faixa de 0 a 2000 é isenta)
 */
export default function impostoRenda (valor) {
  //0 - 8% do valor 1 - 18% do valor 2- 28% do valor
  let porcentagem = [(1000 * 8)/100, (1500.00 * 18)/100, [(valor - 4500.00)*28]/100];
  let calc = 0;
  //se for maior que 4500
  if (valor > 4500.00){
    calc = parseFloat(porcentagem[2]+porcentagem[1]+porcentagem[0]).toFixed(2);
  }else if (valor > 3000.00){
    calc = parseFloat([(valor-3000)*18]/100+porcentagem[0]).toFixed(2);
  } else if (valor > 2000.00){
    calc = parseFloat([(valor-2000.00)*8]/100).toFixed(2);
  }else{
    return 'Isento'
  }
  return 'R$ '+ String(calc)
}
