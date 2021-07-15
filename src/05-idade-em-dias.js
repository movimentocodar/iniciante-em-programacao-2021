/**
 * A função abaixo recebe a `idade` em dias e deve retornar essa informação no formato de anos, meses e dias.
 * Obs: Apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias.
 *
 * Exemplo
 * - Para idade = 400
 * - Deve retornar
 * 1 ano(s)
 * 1 mes(es)
 * 5 dia(s)
 */
export default function idadeEmDias (idade) {
const input = require("fs").readFileSync("stdin", "utf8");

let qtdDias = parseInt(input);

let qtdAnos, qtdMeses;

qtdAnos = parseInt(qtdDias / 365);
qtdDias = qtdDias % 365

qtdMeses = parseInt(qtdDias / 30);
qtdDias = qtdDias % 30;



  return '${qtdAnos} ano(s)
${qtdMeses} mes(es)
${qtdDias} dia(s)';
}
