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
  let hipotenusa = 0;
  let catA = 0;
  let catB = 0;

  if(lado1 > lado2 && lado1 > lado3){
    hipotenusa = lado1;
    catA = lado2;
    catB = lado3;
  }
  else if(lado2 > lado1 && lado2 > lado3){
    hipotenusa = lado2;
    catA = lado1;
    catB = lado3;
  }
  else{
    hipotenusa = lado3;
    catA = lado2;
    catB = lado1;
  }

  let padraoRespostaTipo = "Valido-";
  let padraoRespostaRet = "Retangulo: "

  if(hipotenusa < (catA + catB)){
    if((lado1 != lado2) && (lado2 != lado3) && (lado1 != lado3)){
      padraoRespostaTipo += "Escaleno";
    }
    else if(((lado1 == lado2) && lado2 != lado3) || ((lado1 == lado3) && lado3 != lado2) || ((lado3 == lado2) && lado2 != lado1)){
      padraoRespostaTipo += "Isoceles";
    }
    else if((lado1 == lado2) && lado2 == lado3){
      padraoRespostaTipo += "Equilatero";
    }
    
    //verifica se eh um triangulo retangulo utilizando o teorema de pitagoras

    if(Math.pow(hipotenusa,2) == (Math.pow(catA,2) + Math.pow(catB,2))){
      padraoRespostaRet += "S";
    }
    else{
      padraoRespostaRet += "N";
    }
    
  }
  else{
    return "Invalido";
  }

  return padraoRespostaTipo + "\n" + padraoRespostaRet;
}
