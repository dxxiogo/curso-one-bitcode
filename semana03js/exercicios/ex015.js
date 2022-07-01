
let vetorA = [1, 5, 6 , 9 ,15 , 24, 32, 9, 7, 90];
let vetorB = [8, 5, 9, 3, 2, 8, 4 , 35, 28, 90];

for(let i = 0; i < vetorA.length; i++ ){
    if(vetorA[i] == vetorB[i]){
        console.log(`Há dois números iguais na posição ${i} dos vetores.\n`)
    }
}