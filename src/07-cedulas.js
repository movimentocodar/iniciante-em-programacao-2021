
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
export default function cedulas(valor) {

  var quantia = valor;
  var cedulas = 0;
  var resultado = [quantia, cedulas];

  resultado = verifica(quantia, 100);
  document.write(resultado[1] + " nota(s) de R$100 <br>");

  resultado = verifica(resultado[0], 50);
  document.write(resultado[1] + " nota(s) de R$50 <br>");

  resultado = verifica(resultado[0], 20);
  document.write(resultado[1] + " nota(s) de R$20 <br>");

  resultado = verifica(resultado[0], 10);
  document.write(resultado[1] + " nota(s) de R$10 <br>");

  resultado = verifica(resultado[0], 5);
  document.write(resultado[1] + " nota(s) de R$5 <br>");

  resultado = verifica(resultado[0], 2);
  document.write(resultado[1] + " nota(s) de R$2 <br>");

  resultado = verifica(resultado[0], 1);
  document.write(resultado[1] + " nota(s) de R$1 <br>");
}

cedulas(576);

//------------------------------------------------------------------------------------------//

function verifica(quantia, nota) {

  var cedulas = 0;
  if(quantia >= nota) {
    var conta = quantia / nota;
    var contaResto = quantia % nota;
    
    if(conta >= 1) {
      for(var contador = 1; contador <= conta; contador++){
        cedulas++;
      }
    quantia = contaResto;
    }
  }
  return [quantia, cedulas];
}
//------------------------------------------------------------------------------------------//
