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
export default function qualTriangulo (lado1, lado2, lado3) {
  const isValido = lado1 + lado2 > lado3 &&
                    lado1 + lado3 > lado2 &&
                    lado2 + lado3 > lado1

  if (!isValido) return 'Invalido'

  const tipo = lado1 === lado2 === lado3
    ? 'Equilatero'
    : lado1 === lado2 || lado1 === lado3 || lado2 === lado3
      ? 'Isoceles'
      : 'Escaleno'

  // pitagoras hip² = c1² + c2²
  const ladosOrdenados = [lado1, lado2, lado3].sort()
  const isQuadrado = Math.pow(ladosOrdenados[0], 2) + Math.pow(ladosOrdenados[1], 2) === Math.pow(ladosOrdenados[2], 2)
  return `Valido-${tipo}
Retangulo: ${isQuadrado ? 'S' : 'N'}`
}
