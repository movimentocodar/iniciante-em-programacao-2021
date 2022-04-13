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
  // Implemente sua solução aqui :)
  let texto = ``;

  if( (lado1 < (lado2 + lado3)) && (lado2 < (lado1 + lado3)) && (lado3 < (lado2+lado3))){
     texto = `Valido-`;
     if( (lado1 == lado2) && (lado1 == lado3) && (lado2 == lado3)){
       texto += `Equilatero\n`;
     }else if((lado1 == lado2) || (lado1 == lado3) || (lado2 == lado3)){
       texto += `Isoceles\n`;
     }else{
       texto += `Escaleno\n`;
     }

     if( Math.pow(lado1,2) + Math.pow(lado2,2) == Math.pow(lado3,2)){
       texto += `Retangulo: S`;
     }else{
       texto += `Retangulo: N`;
     }
   }else{
     texto = `Invalido`;
   }

  return texto;
}
