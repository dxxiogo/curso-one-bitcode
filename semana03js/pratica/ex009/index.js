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

let contador = 5
let suma = 0

while(contador >= 0){
    let chosenNumber = prompt("Digite um número:")
    let convertedChosenNumber = parseInt(chosenNumber)
    suma += convertedChosenNumber
    contador --
}
alert("A soma de todos os números é: " + suma)


