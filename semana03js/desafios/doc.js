let NameOld = prompt("Qual o nome da pessoa mais velha?")
let AgeOld = prompt("Qual a idade da pessoa mais velha?")
let NameYoung = prompt("Qual o nome da pessoa mais nova?")
let AgeYoung = prompt("Qual a idade da pessoa mais nova?")
let AgeDiference = AgeOld - AgeYoung
if(AgeOld < AgeYoung){
    alert(`A informação está incorreta, ${NameOld} é mais nova que ${NameYoung}.`)
} else{
    alert("As informações são válidas")
}
document.write(`<p>${NameOld} têm ${AgeOld} anos.</p>`)
document.write(` <p>${NameYoung} têm ${AgeYoung} anos.</p>`)
document.write(`<p>A diferença de idade entre ${NameOld} e ${NameYoung} é de ${AgeDiference} anos</p>`)