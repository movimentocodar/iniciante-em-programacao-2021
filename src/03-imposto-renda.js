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

  var salarioImposto = valor;
  var imposto = [];

  imposto = verifica(salarioImposto);
  console.log(imposto)

  return imposto;
}

impostoRenda(3002.00);


//--------------------------------------------------------------------------------

function verifica(salarioImposto) {

  if(salarioImposto > 2000.00 && salarioImposto < 3000.00) {
    return imposto = ((salarioImposto - 1000.00) * 8 / 100);
    }

  if(salarioImposto > 3000.00 && salarioImposto <= 4500.00) {
    salarioImposto -= 3000.00;
    soma1 = (2000.00 - 1000.00) * 8 / 100;
    soma2 = salarioImposto * 18 / 100
    return imposto = (soma1 + soma2);
    }

    if(salarioImposto > 4500.00) {
    salarioImposto -= 4500.00;
    soma1 = (2000.00 - 1000.00) * 8 / 100;
    soma2 = 4500.00 / 18 / 100;
    soma3 = salarioImposto * 28 / 100;
    return imposto = (soma1 + soma2 + soma3);
    }
}

//--------------------------------------------------------------------------------
