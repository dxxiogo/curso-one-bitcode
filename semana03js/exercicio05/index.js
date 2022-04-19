let spaceship = prompt("Qual o nome da nave?")
let choosenOption = prompt("Deseja entrar em dobra espacial?")
let warpSpace = 0
if(choosenOption == "sim"){
    warpSpace ++
}
while(choosenOption == "sim"){
    choosenOption = prompt("desejar realizar a próxima dobra?")
    warpSpace ++
    choosenOption = prompt("desejar realizar a próxima dobra?")
} 
alert(`${spaceship} realizou ${warpSpace} dobras`)

let spaceShip = "Helmet"
let newSpaceship = ""

for(let i = 0; i < spaceShip.length; i ++ ){
    if(spaceShip[i] == "e"){
        newSpaceship += "i"
    }else{
        newSpaceship += spaceShip[i]
    }
}
console.log(newSpaceship)