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

  const conversaoUnidade = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']
  const conversaoDezena = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C']
  const conversaoCentena = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', 'M']

  const numeroEmString = `${numero}`

  let casas = numeroEmString.length
  let resultado = ''

  let i = 0
  while (casas > 0) {

    let numeroNaIteracao = numeroEmString[i++]

    if (casas === 3) {
      resultado += conversaoCentena[numeroNaIteracao - 1]
    } else if (casas === 2) {
      resultado += conversaoDezena[numeroNaIteracao - 1]
    } else {
      resultado += conversaoUnidade[numeroNaIteracao - 1]
    }

    casas--
  }

  return resultado
}
