let spaceship = prompt("Qual é o nome da nave?")
let caractere = prompt("Qual caractere deseja substituir para mascarar a nave?")
let chooseCaractere = prompt("Por qual caractere deseja substituir?")
let newSpaceShip = ""

for(let contador = 0; contador < spaceship.length; contador++){
    if(spaceship[contador] == caractere ){
        newSpaceShip += chooseCaractere
    }else{
        newSpaceShip += spaceship[contador]
    }
}
alert(newSpaceShip)