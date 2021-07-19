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

  var imposto = 0;
  var aux =0;


    if(valor>4500){

        aux = valor - 4500;
        imposto = 1000 *0.08 + 1500*0.18;
        imposto+= aux *0.28;
        parseFloat(imposto);


    }else if(valor>3000){

        aux = valor - 3000;
        imposto = 1000 *0.08;
        imposto+= aux *0.18;


    }else if(valor>2000){
        aux = valor - 2000;
        imposto+= aux *0.08;
    }
    


    if(imposto>0){
      return 'R$ '+imposto;
      
    }else{
      return 'Isento';
    }
  
}
