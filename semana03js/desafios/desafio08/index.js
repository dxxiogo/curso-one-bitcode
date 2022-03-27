let spaceship = prompt("Qual o nome da nave?")
let newSpaceship = ""

for(let i = spaceship.length - 1; i >= 0; i++){
    if(spaceship[i] == "e"){
        break
    }
    newSpaceship += spaceship[i]
}
