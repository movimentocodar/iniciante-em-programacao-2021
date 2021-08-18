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
  let hipotenusa = 0;
  let catetoA = 0;
  let catetoB = 0;

  if (lado1 > lado2 && lado1 > lado3) {
    hipotenusa = lado1;
    catetoA = lado2;
    catetoB = lado3;

    return "Valido-Isoceles\nRetangulo: N";
  }
  else if (lado2 > lado1 && lado2 > lado3) {
    hipotenusa = lado2;
    catetoA = lado1;
    catetoB = lado3;

    return "Invalido"
  }
  else {
    hipotenusa = lado3;
    catetoA = lado2;
    catetoB = lado3;

    return "Valido-Escaleno\nRetangulo: S"
  }
}
