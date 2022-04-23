alert("Dentran\nBem-vindo! A seguir pediremos que informe alguns dados.")

let nameUser = prompt('Qual o seu nome?')
let ageUser = prompt('Qual sua idade?')
let enoughAge
let yearEnough = 18 - ageUser

if(ageUser < 18){
    let messageAlert
        if(yearEnough == 1){
         messageAlert =  alert("Você não possui idade suficiente para a obtenção da carteira\nEntre em contato com a gente daqui a " + yearEnough + " ano.")
        } else {
            messageAlert =  alert("Você não possui idade suficiente para a obtenção da carteira\nEntre em contato com a gente daqui a " + yearEnough + " anos.");
        }
    enoughAge = "Idade insuficiente"
} else if(ageUser >= 60){
    alert("Será necessário apresentação de exemes de saúde para a obtenção da carteira")
    enoughAge = "Idade a ser analisada"
} else{
    alert("Você possui idade suficiente para a obtenção da carteira. Entre em contanto conosco")
    enoughAge = "Idade suficiente"
} 

alert(`Nome: ${nameUser}\nIdade: ${ageUser} anos\nIdade suficiente? ${enoughAge}`)