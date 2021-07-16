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

  var resultado1 = verificaTriangulo(lado1, lado2, lado3);
  var resultado2 = verificaRetangulo(lado1, lado2, lado3);
  var resultado = resultado1 + resultado2;

  return resultado;
}

//------------------------------------------------------------------------------------------//

function verificaTriangulo (lado1, lado2, lado3) {

  if(lado1 == lado2 && lado1 == lado3 && lado2 == lado3) {return 'Válido-Equilátero'}
  if(lado1 != lado2 && lado2 == lado3 || lado3 != lado2 && lado2 == lado3) {return 'Válido-Isósceles'}
  if(lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {return 'Válido-Escaleno'}
  if(lado1 == 0 || lado2 == 0 || lado3 == 0) {return 'Inválido'}
}

function verificaRetangulo (lado1, lado2, lado3) {

  var h = Math.pow(lado1, 2);
  var c1 = Math.pow(lado2, 2);
  var c2 = Math.pow(lado3, 2);
  var somaCatetos = c1 + c2;

  if(somaCatetos == h) {return 'Retângulo: S'} else {return 'Retângulo: N'}


}

//------------------------------------------------------------------------------------------//

qualTriangulo(4, 3, 3);