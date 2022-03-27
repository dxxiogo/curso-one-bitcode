let spaceshipName = prompt('What is the spaceship name?')
let optionChoose = prompt("Want to enter the warp?\n1- Yes\n2- No")
let warpSpace
if(optionChoose == "1"){
 warpSpace = 1
}
let newOption = prompt("want to re-enter the warp?\n1- Yes\n2- No")
while(newOption == "1"){
     warpSpace ++
     newOption = prompt("want to re-enter warp?\n1-Yes \n2- No")
}
alert(`Amount of space folds: ${warpSpace}\nSpaceship name: ${spaceshipName}`)