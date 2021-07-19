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
export default function notasEMoedas (valor) {
  // Implemente sua solução aqui :)
  var val = valor;
  var count100 = 0;
  var count50 = 0;
  var count20 = 0;
  var count10 = 0;
  var count5 = 0;
  var count2 = 0;
  var count1 = 0;
  var count050 = 0;
  var count025 = 0;
  var count010 = 0;
  var count005 = 0;
  var count001 = 0;
  

   
        count100 = Math.trunc(val/100);
        val %=100;
        
    
        count50 = Math.trunc(val/50);
       
        val %= 50;
        
    
        count20 = Math.trunc(val/20);
        val %= 20;
      
   
        count10 = Math.trunc(val/10);
        val %= 10;
       
   
        count5 = Math.trunc(val/5);
        val %= 5;
      

        count2 = Math.trunc(val/2);
        val %= 2;
       
   
        count1 = Math.trunc(val/1);
        val %= 1; 



        //Moedas
        count050 = Math.trunc(val/0.50);
        val %=0.50;
        
        count025 = Math.trunc(val/0.25);
        val %= 0.25;
        
    
        count010 = Math.trunc(val/0.10);
        val %= 0.10;
      
   
        count005 = Math.trunc(val/0.05);
        val %= 0.05;
       
   
        count001 = Math.trunc(val/0.01);
        val %= 0.01;
      




  return `NOTAS:
${count100} nota(s) de R$ 100.00
${count50} nota(s) de R$ 50.00
${count20} nota(s) de R$ 20.00
${count10} nota(s) de R$ 10.00
${count5} nota(s) de R$ 5.00
${count2} nota(s) de R$ 2.00
MOEDAS:
${count1} moeda(s) de R$ 1.00
${count050} moeda(s) de R$ 0.50
${count025} moeda(s) de R$ 0.25
${count010} moeda(s) de R$ 0.10
${count005} moeda(s) de R$ 0.05
${count001} moeda(s) de R$ 0.01`
}
