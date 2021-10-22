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
  var anos = parseInt(idade / 365);
  var meses = parseInt((idade - (anos * 365)) / 30);
  var dias = parseInt((idade - (anos * 365) - (meses * 30)));;

  return `${anos} ano(s)
${meses} mes(es)
${dias} dia(s)`
}
