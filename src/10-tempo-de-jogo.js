/**
 * A função abaixo recebe quatro números inteiros. A hora inicial, minuto inicial, hora final e minuto final de um jogo.
 * Ela deve retornar a duração desse jogo no formato 'O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)'
 * O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.
 *
 * Exemplo:
 * - Para horaInicial = 7, minutoInicial = 8, horaFinal = 9 e minutoFinal = 10
 * - Deve retornar 'O JOGO DUROU 2 HORA(S) E 2 MINUTO(S)'
 */
export default function tempoDeJogo (horaInicial, minutoInicial, horaFinal, minutoFinal) {
  // Implemente sua solução aqui :)
  var hora =0;
  var minuto =0;

      
       if(horaInicial<horaFinal){
        hora =  horaFinal - horaInicial;
      }else{
          hora = 24+(horaInicial-horaFinal);
        
      }
      

        if(minutoInicial<minutoFinal){
        minuto = minutoFinal - minutoInicial;
      }else{
        minuto = 60-(minutoInicial - minutoFinal);
        hora--;
      }

      if(horaInicial==horaFinal && minutoInicial==minutoFinal){
        hora = 24
        minuto = 0;
      }




  return 'O JOGO DUROU '+hora+' HORA(S) E ' +minuto+ ' MINUTO(S)';
}
