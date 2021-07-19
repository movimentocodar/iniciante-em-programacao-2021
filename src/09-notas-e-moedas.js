/**
 * A função abaixo recebe um valor com duas casas decimais. Este valor representa um valor monetário.
 * Ela deve retornar o menor número de notas e moedas possíveis no qual o valor pode ser decomposto.
 * As notas consideradas são de 100, 50, 20, 10, 5, 2.
 * As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01.
 *
 * Exemplo:
 * - Para valor = 576.73
 * - Deve retornar:
 * NOTAS:
 * 5 nota(s) de R$ 100.00
 * 1 nota(s) de R$ 50.00
 * 1 nota(s) de R$ 20.00
 * 0 nota(s) de R$ 10.00
 * 1 nota(s) de R$ 5.00
 * 0 nota(s) de R$ 2.00
 * MOEDAS:
 * 1 moeda(s) de R$ 1.00
 * 1 moeda(s) de R$ 0.50
 * 0 moeda(s) de R$ 0.25
 * 2 moeda(s) de R$ 0.10
 * 0 moeda(s) de R$ 0.05
 * 3 moeda(s) de R$ 0.01
 */
export default function notasEMoedas (valor) {
  let dinheiros = [0,0,0,0,0,0,0,0,0,0,0,0];
  const valores = [100,50,20,10,5,2,1,0.50,0.25,0.10,0.05,0.01];
  for(let c = 0; c < 12; c++){
    if(valor>dinheiros[c]){
      let temp = Math.floor(valor/valores[c]);
      dinheiros[c] = temp;
      valor -= dinheiros[c]*valores[c]; 
    }
  }
  let resposta = "";

  for(let c = 0; c < 12; c++){
    let tipo = c < 6 ? " nota":" moeda";
    if(c == 0){
      resposta += "NOTAS:\n";
    }
    if(c == 6){
      resposta += "MOEDAS:\n"
    }
    resposta += dinheiros[c] + tipo + "(s) de R$ " + valores[c].toFixed(2);
    if(c != 11){
      resposta += "\n";
    }
  }

  return resposta;
}
