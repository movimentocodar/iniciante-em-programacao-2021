/**
 * Dado as medidas de três lados (números inteiros), verifique se os três podem formar um triângulo.
 * Em caso afirmativo, verifique se ele é escaleno, isóceles ou equilátero e se trata-se de um triângulo retângulo ou não.
 * O retorno deve ser `Valido-Tipo` (Tipo = Isoceles, Escaleno ou Equilatero) e `Retangulo: X` (X = S ou N).
 *
 * Exemplo:
 * - Para lado1 = 4, lado2 = 3 e lado3 = 3
 * - Deve retornar:
 * Valido-Isoceles
 * Retangulo: N
 *
 * Caso não seja um triângulo válido, deve retornar 'Invalido'.
 *
 */
export default function qualTriangulo(lado1, lado2, lado3) {
  // Implemente sua solução aqui :)

  const validoPorLado1 = Math.abs(lado2 - lado3) < lado1 && lado1 < lado2 + lado3
  const validoPorLado2 = Math.abs(lado1 - lado3) < lado2 && lado2 < lado1 + lado3
  const validoPorLado3 = Math.abs(lado1 - lado2) < lado3 && lado3 < lado1 + lado2

  if (!validoPorLado1 && !validoPorLado2 && !validoPorLado3) {
    return 'Invalido'
  }

  const tipo = determinarTipo(lado1, lado2, lado3)

  const isRetangulo = determinarRetangulo(lado1, lado2, lado3)

  return `Valido-${tipo}
Retangulo: ${isRetangulo ? 'S' : 'N'}`
}

function determinarTipo(lado1, lado2, lado3) {
  if (lado1 === lado2 && lado2 === lado3) {
    return 'Equilatero'
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    return 'Isoceles'
  }

  return 'Escaleno'
}

function determinarRetangulo(lado1, lado2, lado3) {

  if (lado1 > lado2) {
    if (lado1 > lado3) {
      return determinarRetanguloPorPitagoras(lado1, lado2, lado3)
    }

    return determinarRetanguloPorPitagoras(lado3, lado1, lado2)
  }

  if (lado2 > lado3) {
    return determinarRetanguloPorPitagoras(lado2, lado1, lado3)
  }

  return determinarRetanguloPorPitagoras(lado3, lado1, lado2)
}

function determinarRetanguloPorPitagoras(hipotenusa, cateto1, cateto2) {
  return Math.pow(hipotenusa, 2) === Math.pow(cateto1, 2) + Math.pow(cateto2, 2)
}

