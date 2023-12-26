/* 
O que deve ser utilizado:
Variáveis 
Operadores
Laços de repetição
Estruturas de decisões
Funções

Objetivo:
Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador, depois disso
retorne o resultado para uma variável, o saldo de vitórias deve ser feito através do cálculo (vitórias-derrotas)
vitórias < 10 = ferro
vitórias 11 e 20 = bronze
vitórias 21 e 50 = prata
vitórias 51 e 80 = ouro
vitórias 81 e 90 = diamante
vitórias 91 e 100 = lendário
vitórias >= 101 = imortal

Ao final retornar a mensagem: "O herói tem o saldo de (saldoVitorias) e está no nível de (nivel)"
*/

function calcularSaldoVitorias (vitorias, derrotas){
        let saldoVitorias = vitorias - derrotas;
        return saldoVitorias
}

let saldoPartidasRankeadas = calcularSaldoVitorias(67,58)
let nível

switch(true){
    case saldoPartidasRankeadas <= 10:
        nivel = "ferro"
        break

    case saldoPartidasRankeadas >= 11 && saldoPartidasRankeadas <= 20:
        nivel = "bronze"
        break

    case saldoPartidasRankeadas >= 21 && saldoPartidasRankeadas <= 50:
        nivel = "prata"
        break

    case saldoPartidasRankeadas >= 51 && saldoPartidasRankeadas <= 80:
        nivel = "ouro"
        break

    case saldoPartidasRankeadas >= 81 && saldoPartidasRankeadas <= 90:
        nivel = "diamante"
        break

     case saldoPartidasRankeadas >= 91 && saldoPartidasRankeadas <= 100:
         nivel = "lendário"
         break

    default:
        nivel = "imortal"
        break
}

console.log("O herói tem o saldo de "+saldoPartidasRankeadas+" e está no nível de "+nivel+"!")