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

 var temp, horas = [];
 for(let a of lines){
     temp = a.split(' ');    
 }
 for(let a of temp){
     horas.push(parseInt(a));    
 }
 if(horas[0] == 0){
     horas[0] = 24;
 }
 if(horas[1] == 0){
     horas[1] = 24;
 }
 var qtdHoras;
 if(horas[0] >= horas[1]){
     qtdHoras = (24 - horas[0]) + horas[1];
 }
 else{
     qtdHoras = horas[1] - horas[0];
 }
 console.log("O JOGO DUROU" + qtdHoras +  "HORA(S)");
 
 return 'O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)'
}