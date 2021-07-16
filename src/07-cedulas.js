
/**
 * A função abaixo recebe um valor inteiro. Este valor representa um valor monetário (apenas notas).
 * Ela deve retornar o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto.
 * As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1.
 *
 * Exemplo:
 * - Para valor = 576
 * - Deve retornar:
 *
 * 576
 * 5 nota(s) de R$ 100,00
 * 1 nota(s) de R$ 50,00
 * 1 nota(s) de R$ 20,00
 * 0 nota(s) de R$ 10,00
 * 1 nota(s) de R$ 5,00
 * 0 nota(s) de R$ 2,00
 * 1 nota(s) de R$ 1,00
 */
export default function cedulas (valor) {
  // Implemente sua solução aqui :)
  var val = valor;
  var count100 = 0;
  var count50 = 0;
  var count20 = 0;
  var count10 = 0;
  var count5 = 0;
  var count2 = 0;
  var count1 = 0;

   
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


      
    


return `${valor}
${count100} nota(s) de R$ 100,00
${count50} nota(s) de R$ 50,00
${count20} nota(s) de R$ 20,00
${count10} nota(s) de R$ 10,00
${count5} nota(s) de R$ 5,00
${count2} nota(s) de R$ 2,00
${count1} nota(s) de R$ 1,00` ;
}
