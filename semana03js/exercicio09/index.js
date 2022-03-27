let spaceship = "Helmet"
let newSpaceShip = ""

for(let i = 0; i < spaceship.length; i++ ){
    if(spaceship[i] == "e"){
        newSpaceShip += "i"
    } else{
        newSpaceShip += spaceship[i]
    }
}
console.log(newSpaceShip)