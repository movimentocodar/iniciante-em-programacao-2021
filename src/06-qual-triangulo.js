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
  var tipo = [];
  var a = lado1;
  var b = lado2;
  var c = lado3;
 
 
  function isTriangulo() {
 
   let triangulo = 0
   if ((b-c) < a && a < (b+c)){
     triangulo += 1;
   }
 
 
   if ((a-c) < b && b < (a+c)){
     triangulo += 1;
   }
 
   
   if ((a-b) < c && c < (a+b)){
     triangulo += 1;
   } 
  
  
   return triangulo = triangulo >= 2 ? true : false;
     
 }
 

   function isTrianguloRetangulo(){
    
   if (isTriangulo()){
     let  A2 = Math.pow(a,2);
     let  B2 = Math.pow(b,2);
     let  C2 = Math.pow(c,2);
     let isRetangulo;
 
      if ((A2 + B2) === C2 || (A2 + C2) === B2 || (B2 + C2) === A2 ){
      
       isRetangulo = "Retangulo: S";
     } else {
       isRetangulo = "Retangulo: N";
     }
     tipo.push(isRetangulo);
   }
   
   }
 
    if (isTriangulo()){
 
      if (lado1 === lado2 && lado2 === lado3 && lado3 === lado1){
          tipo.push("Valido-Equilatero");
      } else if (lado1 === lado2 || lado2 === lado3 || lado3 === lado1){
          tipo.push("Valido-Isoceles")
      } else if (lado1 != lado2 && lado2 != lado3 && lado3 != lado1){
          tipo.push("Valido-Escaleno");
    }
 
   } else{
      tipo.push("Invalido");        
   }
 
  isTrianguloRetangulo();
     
  return tipo.join('\n'); 
  
}
