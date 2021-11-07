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
  
  var ano = idade / 365;
  var mes = (idade % 365) / 30;
  var dia = (idade % 365) % 30;

  return `${Math.floor(ano) + " ano(s)\n"}` +
         `${Math.floor(mes) + " mes(es)\n"}`+
         `${Math.floor(dia) + " dia(s)"}`;
}