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
	var trianguloValido = "Invalido";
	var trianguloTipo = "";
	var trianguloRetangulo = "N";
	var lados = [lado1, lado2, lado3];
	
	if (((lados[1] - lados[2]) < lados[0]) && (lados[0] < (lados[1] + lados[2])) && ((lados[0] - lados[2]) < lados[1]) && (lados[1] < (lados[0] + lados[2])) && ((lados[0] - lados[1]) < lados[2]) && (lados[2] < (lados[0] + lados[1]))){
		trianguloValido = "Valido";

		if ((lados[0] == lados[1]) && (lados[0] == lados[2]) && (lados[1] == lados[2])){
			trianguloTipo = "Equilatero";
		} else if ((lados[0] != lados[1]) && (lados[0] != lados[2]) && (lados[1] != lados[2])){
			trianguloTipo = "Escaleno";	
			trianguloRetangulo = verificaRetangulo(lados);
		} else {
			trianguloTipo = "Isoceles";	
			trianguloRetangulo = verificaRetangulo(lados);	
		}

    return `${trianguloValido}-${trianguloTipo}
Retangulo: ${trianguloRetangulo}`		
	} 

  return trianguloValido;
}

function verificaRetangulo(lados){
	var hipotenusa = Math.max(parseFloat(lados[0]), parseFloat(lados[1]), parseFloat(lados[2]));
	var cateto1 = Math.min(parseFloat(lados[0]), parseFloat(lados[1]), parseFloat(lados[2]));
	var cateto2 = ((parseFloat(lados[0]) + parseFloat(lados[1]) + parseFloat(lados[2])) - hipotenusa - cateto1);
	
	if((((cateto1**2) + (cateto2**2)) == (hipotenusa**2))){
		return "S";
	} else {
		return "N";
	}
}

