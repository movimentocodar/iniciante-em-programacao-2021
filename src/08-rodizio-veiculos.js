/**
 * O rodízio municipal de veículos de São Paulo é uma restrição à circulação de veículos automotores na cidade.
 * Implantado desde 1996 com o propósito de melhorar as condições ambientais reduzindo a carga de poluentes na atmosfera,
 * se consolidou como um instrumento para reduzir congestionamentos nas principais vias da cidade, nos horários de maior movimento.
 * Nas vias delimitadoras não é permitido o tráfego de caminhões e automóveis que estejam dentro da restrição.
 * Há uma escala que determina em quais dias da semana quais veículos não podem circular. Essa escala é regida pelo último dígito da placa do veículo, sendo:
 *
 * Segunda-feira, digito final da placa 1 e 2
 * Terça-feira, digito final da placa 3 e 4
 * Quarta-feira, digito final da placa 5 e 6
 * Quinta-feira, digito final da placa 7 e 8
 * Sexta-feira, digito final da placa 9 e 0
 *
 * Os motoristas que são flagrados violando a restrição de circulação são autuados com multa e quatro pontos na carteira de habilitação.
 *
 * A função abaixo recebe um array de placas. Para cada placa deve ser retornado o dia do rodízio (SEGUNDA, TERÇA, QUARTA, QUINTA ou SEXTA).
 * Para ser válida a placa deve ter o formato "AAA-9999", tal que A é um caracter válido em [A-Z], e 9 um dígito numérico válido em [0-9].
 * Se a placa for inválida deve retornar FALHA ao invés do dia da semana.
 *
 * Exemplo:
 *
 * - Para placas = ['ABC-1234', 'XYZ-1010', 'AAA3333']
 * - Deve retornar:
 * TERÇA
 * SEXTA
 * FALHA
 */
export default function rodizioVeiculos(placas) {
  let retorno = ''
  for (let i = 0; i < placas.length; i++) {
    if (placas[i].length == 8 && placas[i] == placas[i].toUpperCase()){
      if (i > 0)retorno += '\n';
      if (placas[i][7] == 1 || placas[i][7] == 2) {
        retorno += 'SEGUNDA';
      } else if (placas[i][7] == 3 || placas[i][7] == 4) {
        retorno += 'TERÇA';
      } else if (placas[i][7] == 5 || placas[i][7] == 6) {
        retorno += 'QUARTA';
      } else if (placas[i][7] == 7 || placas[i][7] == 8) {
        retorno += 'QUINTA';
      } else if (placas[i][7] == 9 || placas[i][7] == 0) {
        retorno += 'SEXTA';
      } else {
        retorno += 'FALHA';
      }
    }else {
      if (i > 0)retorno += '\n';
      retorno += 'FALHA';
    }
  }
  return retorno;
}
