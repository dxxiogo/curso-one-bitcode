
function slowDown(velocity, printer){
    while(velocity > 0){
        printer(velocity)
        velocity -= 20
    }
   alert("Nave parada. Comportas podem ser abertas.")
}
let spaceshipVelocity = 150
let printVelocity = function(velocity){
    console.log(`Velocidade atual: ${velocity}`)
}
slowDown(spaceshipVelocity, printVelocity)

