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
  // Implemente sua solução aqui :)
  let romano = "";

  while (numero > 0) {
    if (numero > 0 && numero < 1000) {
      if (numero >= 1000) {
        romano += "M";
        numero -= 1000;
      } else if (numero >= 900 && numero < 1000) {
        romano += "CM";
        numero -= 900;
      } else if (numero >= 500 && numero < 900) {
        romano += "D";
        numero -= 500;
      } else if (numero >= 100 && numero < 500) {
        romano += "C";
        numero -= 100;
      } else if (numero >= 90 && numero < 100) {
        romano += "XC";
        numero -= 90;
      } else if (numero >= 50 && numero < 90) {
        romano += "L";
        numero -= 50;
      } else if (numero >= 10 && numero < 50) {
        romano += "X";
        numero -= 10;
      } else if (numero === 9) {
        romano += "IX";
        numero -= 9;
      } else if (numero >= 5 && numero < 10) {
        romano += "V";
        numero -= 5;
      } else if (numero >= 1 && numero < 5) {
        romano += "I";
        numero -= 1;
      }
    }
  }

  return romano;
}
