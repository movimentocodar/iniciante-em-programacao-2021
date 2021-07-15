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
  let ano = Math.round(idade/365);
  let mes = Math.round((idade-365*ano)/30)
  let dia = Math.round((idade-365*ano)-30*mes)
  return String( ano + ' ano(s)\n' + mes + ' mes(es)\n' + dia + ' dia(s)') 
}
