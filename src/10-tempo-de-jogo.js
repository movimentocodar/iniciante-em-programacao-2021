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
  let resultHora = horaFinal - horaInicial;
  let resultMinuto = minutoFinal - minutoInicial;
  if(resultHora == 0 && resultMinuto == 0){
    resultHora = 24;
  }
  if(resultMinuto < 0){
    resultMinuto = 60 + resultMinuto;
    resultHora--;
  }

  return 'O JOGO DUROU ' + resultHora + ' HORA(S) E ' + resultMinuto + ' MINUTO(S)'
}
