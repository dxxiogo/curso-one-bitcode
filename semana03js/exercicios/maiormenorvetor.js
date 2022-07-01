let vetor = [1, 2, 9, 8, 6, 5, 4];

let menor = vetor[0];
let maior = 0;

for(let i = 0; i < vetor.length; i++){
  if(vetor[i] <= menor){
    menor = vetor[i];
  }
  if (vetor[i] >= maior){
    maior = vetor[i];
  } 
}
alert(`O menor número do vetor é ${menor}, e o maior é ${maior}`);