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
 var tetoFaixaIsenta = 2000;
 var tetoFaixa8 = 3000;
 var tetoFaixa18 = 4500;
 
 export default function impostoRenda(valor){
  var imposto;

  if (valor <= tetoFaixaIsenta){
    imposto = "Isento";
  } else if (valor <= tetoFaixa8){
    imposto = adicionarMoeda(calculoFaixa8(valor));
  } else if (valor <= tetoFaixa18){
    imposto = adicionarMoeda(calculoFaixa18(valor));
  } else {
    imposto = adicionarMoeda(calculoFaixa28(valor));
  }

  return imposto;
}

function calculoFaixa8(valor) {
  if (valor <= tetoFaixa8) {
    return ((valor - tetoFaixaIsenta) * 8) / 100;
  }
  else {
    return ((tetoFaixa8 - tetoFaixaIsenta) * 8) / 100;
  }
}

function calculoFaixa18(valor) {
  if (valor <= tetoFaixa18) {
    return (calculoFaixa8(valor) + (((valor - tetoFaixa8) * 18) / 100));
  }
  else {
    return (calculoFaixa8(valor) + (((tetoFaixa18 - tetoFaixa8) * 18) / 100));
  }
}

function calculoFaixa28(valor) {
  return (calculoFaixa18(valor) + (((valor - tetoFaixa18) * 28) / 100));
}

function adicionarMoeda(quanto) {
  return "R$ " + quanto.toFixed(2);
}

