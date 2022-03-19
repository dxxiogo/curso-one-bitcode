/*let n = 0
while(n <= 5){
    console.log(n)
    n += 1
}
console.log('Exercício realizado')*/

let nota = prompt("Dê uma nota para o desfile entre 0 e 10")
while(nota < 0 || nota >10){
    alert('Nota inválida tente novamente')
    nota = prompt("Dê uma nota para o desfile entre 0 e 10")
}
alert(nota) 

/*let userName = prompt('Nome do usuário:')
let password = prompt('Senha:')

while(userName == password){
    console.log("Erro 404")
    userName = prompt('Nome do usuário:')
     password = prompt('Senha:')
}*/