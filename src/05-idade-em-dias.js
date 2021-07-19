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

  let ano = 0
  let mes = 0
  let dias = 0

  while (idade > 0) {
    if (idade >= 365) {
      idade -= 365
      ano++
    }
    if (idade >= 30) {
      idade -= 30
      mes++
    }
    if (idade < 29) {
      dias = idade
      idade = 0
    }
  }
  return `${ano} ano(s)\n${mes} mes(es)\n${dias} dia(s)`
}

idadeEmDias()