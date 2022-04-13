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
  let ano;
  let mes;
  let dia;

  ano = idade / 365;
  mes = (idade % 365) / 30;
  dia = (idade % 365) % 30;

  return `${parseInt(ano)} ano(s)\n${parseInt(mes)} mes(es)\n${parseInt(dia)} dia(s)`;
}
