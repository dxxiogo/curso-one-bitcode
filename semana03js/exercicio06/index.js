/*let velocity = 50
let acceleration = 5

while(velocity <= 100){
    console.log(velocity)
    velocity += acceleration
}
alert("Velocidade zerada") */

let constellation = "Andromedra" // Percorrer a a string e imprimir a posição que tenha "A" e "a"
let pos = 0
let constellationLength = constellation.length

while(pos < constellationLength) {
    if(constellation[pos] == "a" || constellation[pos] == "A"){
        console.log(pos)
    }
    pos += 1
}