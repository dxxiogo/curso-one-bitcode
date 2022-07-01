let vetor = [2, 4, 1, -1 , 6, 8, 20];

somaImpares = 0;
let quantImpares = 0;

for(let i = 0; i < vetor.length; i++){
    if(vetor[i]% 2 != 0){
        somaImpares += vetor[i];
        quantImpares ++;
    }
}
if(quantImpares == 0){
    console.log("Não existe números ímpares dentro do vetor!");
} else {
    console.log(`A quantidade de números dentro é ${quantImpares}, e a soma de todos eles é ${somaImpares}`);
}
