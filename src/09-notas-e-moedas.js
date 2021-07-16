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

  var quantia = valor;
  var notas = 0;
  var resultado = [quantia, notas];

    resultado = verifica(quantia, 100.00);
  document.write(resultado[1] + " nota(s) de R$100 <br>");

  resultado = verifica(resultado[0], 50.00);
  document.write(resultado[1] + " nota(s) de R$50 <br>");

  resultado = verifica(resultado[0], 20.00);
  document.write(resultado[1] + " nota(s) de R$20 <br>");

  resultado = verifica(resultado[0], 10.00);
  document.write(resultado[1] + " nota(s) de R$10 <br>");

  resultado = verifica(resultado[0], 5.00);
  document.write(resultado[1] + " nota(s) de R$5 <br>");

  resultado = verifica(resultado[0], 2.00);
  document.write(resultado[1] + " nota(s) de R$2 <br>");

  resultado = verifica(resultado[0], 1.00);
  document.write(resultado[1] + " moeda(s) de R$1 <br>");

  resultado = verifica(resultado[0], 0.50);
  document.write(resultado[1] + " moeda(s) de R$0,50 <br>");

  resultado = verifica(resultado[0], 0.25);
  document.write(resultado[1] + " moeda(s) de R$0,25 <br>");

  resultado = verifica(resultado[0], 0.10);
  document.write(resultado[1] + " moeda(s) de R$0,10 <br>");

  resultado = verifica(resultado[0], 0.05);
  document.write(resultado[1] + " moeda(s) de R$0,05 <br>");

  resultado = verifica(resultado[0], 0.01);
  document.write(resultado[1] + " moeda(s) de R$0,01 <br>");

}

notasEMoedas(576.73);

//------------------------------------------------------------------------------------------//

function verifica(quantia, nota) {

  var notas = 0;
  if(quantia >= nota) {
    var conta = quantia / nota;
    var contaResto = quantia % nota;
    
    if(conta >= 1) {
      for(var contador = 1; contador <= conta; contador++){
        notas++;
      }
    quantia = contaResto;
    }
  }
  return [quantia, notas];
}
//------------------------------------------------------------------------------------------//
