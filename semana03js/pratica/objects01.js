let spaceship = {
    name: "Spacepoc",
    crewQuantity: (crew) => {return crew*2},
    type: "Pride"
}

spaceship.isHitched = false
spaceship["shieldLevel"] = 100

spaceship.velocity = 10;

spaceship.spaceshipInformation = function (acelleration){
    this.velocity += acelleration;
    console.log(`O nome da nave é ${this.name}, e está a ${this.velocity}Km`)
}

console.log(spaceship.spaceshipInformation(10))
console.table(spaceship)
