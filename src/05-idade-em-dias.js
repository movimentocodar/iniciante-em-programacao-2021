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
  // Implemente sua solução aqui :)

var ano = 0;
var mes = 0;
var dia = 0;

  ano = Math.trunc(idade/365);
  mes = Math.trunc((idade%365)/30);
  dia = Math.trunc((idade%365)%30); 



return `${ano} ano(s)
${mes} mes(es)
${dia} dia(s)`
}
