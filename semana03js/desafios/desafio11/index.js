let velocitySpaceship = 150

function slowDown(velocity, printer){
    console.log("Entrada na função")
    let newVelocity
    let seconds = 0
    while(velocity > 0){
        console.log(velocity)
        velocity -= 20
        seconds ++
        console.log(`${seconds} segundos`)
    }
    printer(velocity)
    return velocity
}

slowDown(150)