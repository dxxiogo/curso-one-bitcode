/*13. Faça um procedimento que recebe, por parâmetro, um vetor A(25) de inteiros e substitui todos os valores negativos de A por zero. O vetor A deve retornar alterado.*/

function recebeVetor(vetor){
    for(let i= 0; i < vetor.length; i ++){
        if(vetor[i] < 0){
            vetor[i] = 0;
        }
    }
    return vetor;
}
let vetorA = [1, 2, 5, -10, 20, 10];

console.log(vetorA)


console.log(recebeVetor(vetorA))


