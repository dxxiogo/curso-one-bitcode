let spaceship = prompt("Qual o nome da nave?")
let dobra = confirm("Você deseja entrar em dobra?")
if(dobra == true){
    dobra ++
}
let nextdobra = confirm("Você deseja realizar a próxima dobra?")

while(nextdobra == true){
    dobra ++
    nextdobra = confirm("Você deseja realizar a próxima dobra?")
}
document.write(`A nave ${spaceship} realizou ${dobra} dobras`)

