let nameStudent = prompt("Olá seja bem-vindo(a) a plataforma IF EDUCA\nQual o seu nome?")
alert(`BOM DIA, ${nameStudent}! A seguir pediremos suas notas para o cálculo.`)
let firstNote = prompt("Qual é sua primeira nota?")
let secondNote = prompt("Qual é sua segunda nota?")
let thirdNote = prompt("Qual sua terceira nota?")

let convertNumberFirst = parseInt(firstNote)
let convertNumberSecond = parseInt(secondNote)
let convertNumberThird = parseInt(thirdNote)

let finalMedia = (convertNumberFirst +convertNumberSecond + convertNumberThird)/3

if(finalMedia <= 4){
    alert("Sua média foi " + finalMedia+ ". REPROVADO!")
} else if (finalMedia >= 5 && finalMedia <= 6){
    alert("Sua média foi " + finalMedia+ ". RECUPERAÇÃO!")
} else{
    alert("Sua média foi " + finalMedia+ ". PARABÉNS, você foi aprovado. Boas férias!!")
}