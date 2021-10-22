/**
 * A função abaixo recebe um array de números inteiros.
 * Cada um desses números é um valor maior que 0 e menor ou igual 1000 (0 < n <= 1000).
 * O array tem no mínimo 1 e no máximo 1000 elementos.
 *
 * Realize a soma de todos os elementos e retorne o valor dessa soma.
 *
 * Exemplo:
 * - Dado o array `numeros` igual a  [1, 2, 3, 4, 10, 11]
 * - O resultado retornado deve ser 31
 */
export default function somaSimplesArray(numeros) {
	var soma = 0;
	var numLength = numeros.length;
	for (var i = 0; i < numLength; i++){
	  soma = soma + parseInt(numeros[i]);
	}
	return soma;
}
