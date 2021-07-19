/**
 * A função abaixo recebe a `idade` em dias e deve retornar essa informação no formato de anos, meses e dias.
 * Obs: Apenas para facilitar o cálculo, considere todo ano com tempo dias e todo mês com 30 dias.
 *
 * Exemplo
 * - Para idade = 400
 * - Deve retornar
 * 1 ano(s)
 * 1 mes(es)
 * 5 dia(s)
 */
 
export default function idadeEmDias (idade) {

  var dias = idade;
  var resultado1 = [];
  var resultado2 = [];

  resultado1 = verifica(dias, 365);
  resultado2 = verifica(resultado1[1], 30)
  console.log(resultado1);
  console.log(resultado2);

  document.write(resultado1[0] + " ano(s) <br>" + resultado2[0] + " mês(es) <br>" + resultado2[1] + " dia(s)")

}

//------------------------------------------------------------------------------------------//

  function verifica(diasPassados, tempo) {

    var dias = diasPassados;
    
    if(dias >= tempo) {
    var conta = Math.round(dias / tempo);
    var contaResto = Math.round(dias % tempo);
    dias = contaResto;
    }
    return [conta, dias];
  }

//------------------------------------------------------------------------------------------//

idadeEmDias(400);
