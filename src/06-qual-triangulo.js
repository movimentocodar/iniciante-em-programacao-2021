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
  var aux = 0;
  var validadeTriangulo =0;
  var tipoTriangulo =0;
  var validaRetangulo =0;
  // Implemente sua solução aqui :)
  //verificação para saber se é um triângulo 
    if(lado3> Math.abs(lado1 - lado2) && lado3<(lado1+lado2)){
          aux++;
    } if(lado2> Math.abs(lado3 - lado1) && lado2<(lado3+lado1)){
          aux++;
    }if(lado1> Math.abs(lado3 - lado2) && lado1<(lado2+lado3)){
          aux++;
    }

    

    if(lado1 != lado2 && lado1 !=lado3 && lado3!=lado2){
        tipoTriangulo = 'Escaleno';
    } else if(lado1 == lado2 && lado1 ==lado3 && lado3==lado2){
        tipoTriangulo = 'Equilatero';
    }else{
      tipoTriangulo = 'Isoceles';
    }



    if(Math.pow(lado1,2) == Math.pow(lado2,2)+ Math.pow(lado3,2)||

        Math.pow(lado2,2)== Math.pow(lado1,2)+Math.pow(lado3,2)||

        Math.pow(lado3,2) == Math.pow(lado1,2)+ Math.pow(lado2,2) ) {

          
          validaRetangulo = 'S';


        }else{

          validaRetangulo = 'N';
        }


        if(aux==3){
            validadeTriangulo = 'Valido';

            return `${validadeTriangulo}-${tipoTriangulo}
Retangulo: ${validaRetangulo}`
        }else{

          return 'Invalido';
        }
    

}
