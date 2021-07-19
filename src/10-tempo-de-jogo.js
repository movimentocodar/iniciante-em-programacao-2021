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

  let horas = horaFinal - horaInicial
  let minutos = minutoFinal - minutoInicial

  if (horaInicial == horaFinal && minutoInicial == minutoFinal) {
    return "O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)"
  }

  if (horas < 0) {
    horas += 24
  }
  if (minutos < 0) {
    minutos += 60
    horas -= 1
  }

  return `O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`
}