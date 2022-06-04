let spaceship = prompt("informe o nome da nave:");
let caracterPSubstituir = prompt("Informe o caractere que você deseja substituir")
let substituto = prompt("Informe por qual caractere você deseja substituir")

let newSpaceship = ""

for(let pos = 0; pos < spaceship.length; pos ++){
    if(spaceship[pos] == caracterPSubstituir){
        newSpaceship += substituto
    } else{
        newSpaceship += spaceship[pos]
    }
}
console.log(newSpaceship)