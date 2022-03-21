let dobra = 0
let naveName = prompt("Qual o nome da nave?")
let Nextdobra = confirm(`Deseja entrar em dobra espacial?`)

while(Nextdobra == true){
     dobra += 1
     Nextdobra = confirm("Você deseja realizar a próxima dobra?")
}
document.write(`A nave ${naveName} realizou ${dobra} dobras`) 


