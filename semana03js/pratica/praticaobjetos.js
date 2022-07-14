/*Crie uma variável chamada casa que execute as seguintes operações:
Atribua um objeto a variável com as propriedades:
quartos = 2
tipo = “casa”
endereco = “rua teste 123 – ZS”
Exiba no console a seguinte frase (usando TODOS as propriedades): Casa com 2 quartos localizada na rua teste 123 – ZS.
Corrija o objeto abaixo de forma a não ocorrer erro quando você executar o comando console.log(produtos.jogos.acao[2]).*/

let casa ={
    quartos: 2,
    tipo: "mansão",
    endereco: "Rua teste 123 - ZS"
}

console.log(`${casa.tipo} localizada ${casa.endereco} têm ${casa.quartos} quartos`)

let produtos = {
    videos : {
        comedia: ["comedia1","comedia2"],
        romance: ["romance1", "romance2"]
    },

    revistas : [
        moda  = ["lalala", "lililili"],
        saude  = ["lalala", "lililili"],
    ],

    jogos : {
        rpg: ["rpg1", "rpg2", "rpg3"],
        acao: ["acao1", "God of War"]
    }
}

console.log(produtos.jogos.acao[1])