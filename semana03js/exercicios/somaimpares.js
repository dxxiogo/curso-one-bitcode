let vetor = [2, 4, 1, -1 , 6, 8, 20];

let soma = 0;
let quantImpares = 0;

somaImpares = vetor.forEach( elemento => { 
    if(elemento%2 != 0){
        soma += elemento;
        quantImpares ++;
    }
    return quantImpares;
});


console.log(quantImpares);
console.log(soma)
console.log(somaImpares);
