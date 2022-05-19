/*
let contador = 6
let par = 0
let impar = 0

while(contador >= 0){
    let optionNumber = prompt("Digite um número:")
    let convertOptionNumber = parseInt(optionNumber)
    if(convertOptionNumber%2 == 0){
        par ++
    } else{ 
        impar ++
    }
    contador --
}
alert(`Quantidade de números:\nPares: ${par}\nÍmpares: ${impar}`)
*/

/*
let contador = 5
let suma = 0
while(contador >= 1){
    let chosenNumber = prompt("Digite um número:")
    let convertedChosenNumber = parseInt(chosenNumber)
    suma += convertedChosenNumber
    contador --
}
alert("A soma de todos os números é: " + suma)
*/


/*
let contador = 4;
let numero = 0;
let par = 0;
let impar = 0;
while(contador >= 1){
    numero = prompt("Digite um número");
    let converterNumero = parseInt(numero)
    if( converterNumero % 2 == 0){
        par  ++;
    } else{
        impar ++;
    }
    contador --;
}
alert("Quantidade de números pares: " + par + "\n Quantidade de números impares: " + impar)
*/

/*
let contador = 4
let ordem = 1
let priceOfProduct = 0
let maiorPreco
let menorPreco
while(contador >= 0){
    priceOfProduct = prompt(`Preço do ${ordem}° produto:`)
    ordem ++
    if(priceOfProduct >= priceOfProduct){
         maiorPreco = priceOfProduct
    } else if( priceOfProduct < priceOfProduct){
         menorPreco = priceOfProduct 
    }
    contador --
}
alert(`O menor valor informado foi R$${menorPreco}, e o maior valor informado foi R$${maiorPreco} `)
*/
/*
contador =3;
num = prompt("Informe um numero inteiro positivo:");
convertNum = parseInt(num);
salto = 3;

while(contador >= 0){
    console.log(convertNum);
    convertNum += salto;
    contador --;
}
*/
/*
contador = 1000;
num = 0
num = prompt("Informe um número inteiro positivo:");
convertNum = parseInt(num);
let divisores 
while(contador > 0){
    if(num%contador == 0){
        console.log(contador)
    }
    contador --
}
*/

let firstNumber = 0;
let secondNumber= 0;
let soma = 0;
firstNumber = prompt("Informe o número para iniciar a contagem:");
secondNumber = prompt("Informe mais um número para finalizar a contagem:");
let contador = secondNumber
let convertFirstNumber = parseInt(firstNumber);

while(contador >= 0 ){
    soma += convertFirstNumber;
    convertFirstNumber ++;
    contador --;
} 
alert(`A soma final entre o intervalo de ${firstNumber} e ${secondNumber} é ${soma}`);

