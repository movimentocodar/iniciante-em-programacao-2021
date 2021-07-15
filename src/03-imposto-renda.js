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
  // Implemente sua solução aqui :)
 let total = 0;
 let parcial1 = 0;
 let parcial2 = 0
 let parcial3 = 0
 let valor8 = 0;
 let valor18 = 0;
 let valor28 = 0;

 if(valor <= 2000.00){
   return `Isento`;
 }else if(valor > 2000.01 && valor <= 3000.00){
   valor8 = (valor - 2000) * 0.08;
 }else if(valor > 3000.01 && valor <= 4500.00){
   parcial1 = valor - 3000.00;

   valor18 = parcial1 * 0.18;
   valor8 = (valor - parcial1 - 2000) * 0.08;

   total = valor8 + valor18;
 }else{
   parcial1 = valor - 4500;
   parcial2 = valor - parcial1 - 3000;
   parcial3 = valor - parcial1 - parcial2 - 2000;

   valor28 = parcial1 * 0.28;
   valor18 = parcial2 * 0.18;
   valor8 = parcial3 * 0.08;

   total = valor8 + valor18 + valor28;
 }
  return 'R$ ' + total.toFixed(2);
}
