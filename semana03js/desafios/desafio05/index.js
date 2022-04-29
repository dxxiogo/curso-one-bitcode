let spaceship = prompt("Qual o nome da nave?")
let spaceWrap = prompt("Deseja entrar na dobra espacial?\n1- Sim\n2- Não") 

if(spaceWrap == "1"){
    spaceWrap = 1
}
while(nextSpaceWrap == "1"){
    nextSpaceWrap = prompt("Você deseja relizar a próxima dobra?\n1- Sim\n2- Não")
    spaceWrap ++
}
alert("Nome da espaçonave: "+spaceship+"\nDobras realizadas: " + spaceWrap + " dobras")