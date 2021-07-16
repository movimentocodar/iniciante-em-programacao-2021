/**
 * A função abaixo recebe quatro números inteiros. A hora inicial, minuto inicial, hora final e minuto final de um jogo.
 * Ela deve retornar a duração desse jogo no formato 'O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)'
 * O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.
 *
 * Exemplo:
 * - Para horaInicial = 7, minutoInicial = 8, horaFinal = 9 e minutoFinal = 10
 * - Deve retornar 'O JOGO DUROU 2 HORA(S) E 2 MINUTO(S)'
 */
export default function tempoDeJogo (horaInicial, minutoInicial, horaFinal, minutoFinal){
var horas;
var minutos;
  
if (horaInicial == horaFinal && minutoInicial == minutoFinal){
  horas = 24;
  minutos = 0;
} else {
  var horarioInicial = new Date(0, 0, 0, horaInicial, minutoInicial, 0);
  var horarioFinal = new Date(0, 0, 0, horaFinal, minutoFinal, 0);

  var tempo = horarioFinal.getTime() - horarioInicial.getTime();

    horas = parseInt((((tempo / 1000) / 60)) / 60);
    minutos = parseInt((tempo - ((((horas * 1000) * 60)) * 60)) / 1000 / 60);
  }

  return `O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`
}
