/**
 * A função abaixo recebe dois números inteiros `a` e `b`.
 * Realize a soma desses dois números e retorne 'X = S', onde S é o valor da soma.
 *
 * Exemplo:
 * - Dado a = 3 e b = 1
 * - O resultado retornado deve ser 'X = 4'
 */
export default function somaValores (a, b) {
var imput = require("fs").readFileSync("studin", "Utf8");
var imput;
var valores = input.split("\n");
var a = parseInt(valores.shift());
var b = parseInt(valores.shift());

var soma = a + b;
console.log("soma = " + soma);
}
