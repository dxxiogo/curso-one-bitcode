let dobra
let spaceshipName = prompt("Qual o nome da nave?")
let choosen = confirm("Deseja entrar na dobra?")
if(choosen == true){
    dobra = 1
}
while(choosen == true){
    choosen = confirm("Deseja realizar próxima dobra na dobra?")
    dobra ++
}
alert("Quantidade de dobras realizadas " + dobra)