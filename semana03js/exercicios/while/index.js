let constellation = "Andromeda"
let pos = 0
let constellationLenght = constellation.length

while(pos < constellationLenght){
    if(constellation[pos] == "A" || constellation[pos] == "a"){
        console.log(pos)
    }
    pos += 1
}