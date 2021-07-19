/**
 * A função abaixo recebe um valor com duas casas decimais. Este valor representa um valor monetário.
 * Ela deve retornar o menor número de notas e moedas possíveis no qual o valor pode ser decomposto.
 * As notas consideradas são de 100, 50, 20, 10, 5, 2.
 * As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01.
 *
 * Exemplo:
 * - Para valor = 576.73
 * - Deve retornar:
 * NOTAS:
 * 5 nota(s) de R$ 100.00
 * 1 nota(s) de R$ 50.00
 * 1 nota(s) de R$ 20.00
 * 0 nota(s) de R$ 10.00
 * 1 nota(s) de R$ 5.00
 * 0 nota(s) de R$ 2.00
 * MOEDAS:
 * 1 moeda(s) de R$ 1.00
 * 1 moeda(s) de R$ 0.50
 * 0 moeda(s) de R$ 0.25
 * 2 moeda(s) de R$ 0.10
 * 0 moeda(s) de R$ 0.05
 * 3 moeda(s) de R$ 0.01
 */

 var input = require('fs').readFileSync('/dev/stdin', 'utf8'); var lines = input.split('\n');

 var dinheiro = parseFloat(lines[0]); var notas = parseFloat(lines[1]);
 
   console.log("NOTAS:\n");
 
   while (dinheiro >= 100) {
     dinheiro = dinheiro - 100;
     notas++;
   }
   console.log(notas + "nota(s) de R$ 100.00");
 
   notas = 0;
 
   while (dinheiro >= 50) {
     dinheiro = dinheiro - 50;
     notas++;
   }
   console.log(notas + "nota(s) de R$ 50.00");
 
   notas = 0;
 
   while (dinheiro >= 20) {
     dinheiro = dinheiro - 20;
     notas++;
   }
   console.log(notas + "nota(s) de R$ 20.00");
 
   notas = 0;
 
   while (dinheiro >= 10) {
     dinheiro = dinheiro - 10;
     notas++;
   }
   console.log(notas + "nota(s) de R$ 10.00");
 
   notas = 0;
 
   while (dinheiro >= 5) {
     dinheiro = dinheiro - 5;
     notas++;
   }
   console.log(notas + "nota(s) de R$ 5.00");
 
   notas = 0;
 
   while (dinheiro >= 2) {
     dinheiro = dinheiro - 2;
     notas++;
   }
   console.log(notas + "nota(s) de R$ 2.00");
 
   notas = 0;
 
   console.log("MOEDAS:\n");
 
   while (dinheiro >= 1) {
     dinheiro = dinheiro - 1;
     notas++;
   }
   console.log(notas + "moeda(s) de R$ 1.00");
 
   notas = 0;
 
   while (dinheiro >= 0.5) {
     dinheiro = dinheiro - 0.5;
     notas++;
   }
   console.log(notas + "moeda(s) de R$ 0.50");
 
   notas = 0;
 
   while (dinheiro >= 0.25) {
     dinheiro = dinheiro - 0.25;
     notas++;
   }
   console.log(notas + "moeda(s) de R$ 0.25");
 
   notas = 0;
 
   while (dinheiro >= 0.10) {
     dinheiro = dinheiro - 0.10;
     notas++;
   }
   console.log(notas + "moeda(s) de R$ 0.10");
 
   notas = 0;
 
   while (dinheiro >= 0.05) {
     dinheiro = dinheiro - 0.05;
     notas++;
   }
   console.log(notas + "moeda(s) de R$ 0.05");
 
   notas = 0;
 
   while (dinheiro >= 0.01) {
     dinheiro = dinheiro - 0.01;
     notas++;
   }
   console.log(notas + "moeda(s) de R$ 0.01");
 
   notas = 0;
