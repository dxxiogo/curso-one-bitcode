let naveName = prompt("Qual o nome da nave?")
let dobra = prompt(`Deseja entrar em dobra espacial?\n1- Sim\n2- Não`)

let Nextdobra
while(dobra == "1"){
    Nextdobra = prompt("Você deseja realizar a próxima dobra?\n1- Sim\n2- Não")
    if(Nextdobra == "1"){
        dobra += 1
    }
}
alert("Número de dobras feitas:  " + dobra)
