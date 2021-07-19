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
  let dur;
  let min;
  //Hora
  if (horaFinal <= horaInicial) {
    dur = 24 - (horaFinal - horaInicial)
  }else if (horaFinal >= horaInicial) {
    dur = horaInicial-horaFinal
  }
  //Minutos
  min = minutoFinal - minutoInicial
  if (min < 0){
    dur -= min;
    min += 60;
  }
  //Verifica se a duração e um numero negativo
  if (dur < 0){
    dur *= -1;
  }
  return 'O JOGO DUROU '+String(dur)+' HORA(S) E '+String(min)+' MINUTO(S)'
}
