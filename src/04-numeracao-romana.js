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
  var numeroEmRomano;
  
  if (numero < 1){
    numeroEmRomano = "Não há representação para 0 em números romanos nem páginas negativas."
  } else if ((numero / 1000) >= 1){
    numeroEmRomano = "Livros acima de 999 páginas deverão ser divididos em volumes.";
  } else {
    numeroEmRomano = montaNumeroRomano(numero);
  }

  return numeroEmRomano;
}

function montaNumeroRomano(numero){
  var numeroEmRomano = "";
  
  var multRomanos = [900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var multRomanosLength = multRomanos.length;
  var simboloNumerosRomanos = ["CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var qtdNumerosRomanos = [];
  var subRomanos = 0;
  
  for(i = 0; i < multRomanosLength; i++){
    qtdNumerosRomanos[i] = parseInt((numero + subRomanos) / multRomanos[i]);
    subRomanos -= (parseInt(qtdNumerosRomanos[i] * multRomanos[i]));
  }
	
  var qtdNumerosRomanosLength = qtdNumerosRomanos.length;

	for (var i = 0; i < qtdNumerosRomanosLength; i++) {
		for (var x = 0; x < qtdNumerosRomanos[i]; x++){
			numeroEmRomano += simboloNumerosRomanos[i];
		}
	}
		
	return numeroEmRomano;
}