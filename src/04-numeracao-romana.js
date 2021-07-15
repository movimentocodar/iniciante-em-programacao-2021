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
export default function numeracaoRomana(numero) {
  let i = 0
  let result = ''
  let romanInfo = [
    [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'],
  ];

  while (numero > 0) {
    if (numero >= romanInfo[0][i]) {
      result += romanInfo[1][i];
      numero -= romanInfo[0][i];
    } else {
      if (i >= 12) {
        i = 0;
      } else {
        i += 1
      }
    }
  }
  return result;

}
