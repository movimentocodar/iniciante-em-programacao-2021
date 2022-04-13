/**
 * A função abaixo recebe quatro números inteiros. A hora inicial, minuto inicial, hora final e minuto final de um jogo.
 * Ela deve retornar a duração desse jogo no formato 'O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)'
 * O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.
 *
 * Exemplo:
 * - Para horaInicial = 7, minutoInicial = 8, horaFinal = 9 e minutoFinal = 10
 * - Deve retornar 'O JOGO DUROU 2 HORA(S) E 2 MINUTO(S)'
 */
export default function tempoDeJogo(horaInicial, minutoInicial, horaFinal, minutoFinal) {
  // Implemente sua solução aqui :)

  const totalEmMinutosInicial = (horaInicial * 60) + minutoInicial
  const totalEmMinutosFinal = (horaFinal * 60) + minutoFinal

  const quantidadeEmMinutosTotal = totalEmMinutosFinal - totalEmMinutosInicial

  const quantidadeEmHoras = horaInicial === horaFinal ? 24 : Math.floor(quantidadeEmMinutosTotal / 60)
  const quantidadeEmMinutos = quantidadeEmMinutosTotal % 60

  return `O JOGO DUROU ${quantidadeEmHoras} HORA(S) E ${quantidadeEmMinutos} MINUTO(S)`
}
