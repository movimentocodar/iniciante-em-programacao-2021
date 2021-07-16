/**
 * A ECI (Editio Chronica Incredibilis ou Editora de Crônicas Incríveis) é muito tradicional quando se trata de numerar as páginas de seus livros.
 * Ela sempre usa a numeração romana para isso. E seus livros nunca ultrapassam as 999 páginas pois, quando necessário, dividem o livro em volumes.
 *
 * Lembre que I representa 1, V é 5, X é 10, L é 50, C é 100, D é 500 e M representa 1000.
 *
 * A função abaixo recebe um número arábico (inteiro maior que 0 e menor que 1000) e deve retornar seu equivalente na numeração romana.
 *
 * Exemplo:
 * - Dado numero = 666
 * - Deve retornar 'DCLXVI'
 */
export default function numeracaoRomana (numero) {

  var n = numero;
  var nRomanos = "";

  var retorno = [n, nRomanos];

  retorno = verifica900(n, nRomanos)
  retorno = verificaNaoRepete(retorno, 500, "D");
  retorno = verificaNaoRepete(retorno, 400, "CD");
  retorno = verificaRepete(retorno, 100, "C");
  retorno = verificaNaoRepete(retorno, 90, "XC");
  retorno = verificaNaoRepete(retorno, 50, "L");
  retorno = verificaNaoRepete(retorno, 40, "XL");
  retorno = verificaRepete(retorno, 10, "X");
  retorno = verificaNaoRepete(retorno, 9, "IX");
  retorno = verificaNaoRepete(retorno, 5, "V");
  retorno = verificaNaoRepete(retorno, 4, "IV");
  retorno = verificaRepete(retorno, 1, "I");

//-- RESULTADO//
  document.write(retorno[1]);
  document.write("<hr>");

}

numeracaoRomana(666);

//------------------------------------------------------------------------------------------//

function verifica900(n, nRomanos) {

  if(n >= 900) {
    var conta = n / 900;
    var contaResto = n % 900;
    
    if (conta >= 1) {
        var nRomanos = nRomanos + "CM";
        n = contaResto;
    } 
  }
  return [n, nRomanos]
}

function verificaRepete(retorno, inteiro, letra) {

  var nRomanos = retorno[1];
  var n = retorno[0];
  
  if(n >= inteiro) {
    var conta = n / inteiro;
    var contaResto = n % inteiro;
    
    if (conta >= 1) {
      for(var contador = 1; contador <= conta; contador++){
        var nRomanos = nRomanos + letra;
        n = contaResto;
      }
    }
  }
  return [n, nRomanos];
}

function verificaNaoRepete(retorno, inteiro, letra) {

  var nRomanos = retorno[1];
  var n = retorno[0];
  
  if(n >= inteiro) {
    var conta = n / inteiro;
    var contaResto = n % inteiro;
    
    if (conta >= 1) {
        var nRomanos = nRomanos + letra;
        n = contaResto;
    }
}
  return [n, nRomanos];
}

//------------------------------------------------------------------------------------------//