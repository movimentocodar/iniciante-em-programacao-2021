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

function tempoDeJogo (horaInicial, minutoInicial, horaFinal, minutoFinal) {


var inicioHora = horaInicial;
var inicioMinuto = minutoInicial;


var fimHora = horaFinal;
var fimMinuto = minutoFinal;


inicioMinuto = conversorMinutos(inicioMinuto);
fimMinuto = conversorMinutos(fimMinuto);

var calculoHoras = calculo(fimHora, inicioHora);
var calculoMinutos = Math.round(calculo(fimMinuto, inicioMinuto) * 100);

document.write("O JOGO DUROU " + calculoHoras + " HORA(S) E " + calculoMinutos + " MINUTO(S)")

}



tempoDeJogo(7, 8, 9, 10);

//------------------------------------------------------------------------------------------//

function conversorMinutos(tempo) {return tempo / 100}

function calculo(nFinal, nInicio) {return nFinal - nInicio}


//------------------------------------------------------------------------------------------//


}
