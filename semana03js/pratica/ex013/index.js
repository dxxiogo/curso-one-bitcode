// Vamos criar um programa para verificar se a pessoas gosta de animais, e probabilidade dela ser vegana
let nameUser = prompt("Qual seu nome?")
let prob = prompt("Você seria vegane pelos animais?\n1- Sim\n2- Talvez\n3- Não")

function loveAnimal(){
    switch(prob){
        case "1":
            alert("Você provavelmente ama os animais!")
            break
        case "2":
            alert("Você aparenta não gostar de animais. Mas, talvez eu esteja errado.")
            break
        case "3":
            alert("Você obviamente odeia animais")        
            let questionAnimal = prompt("Você deseja conhecer mais sobre eles?")
            if(questionAnimal == "sim"){
                alert(`${nameUser}, olá!! Tenho algo a te falar, eles te amam, espero que você também os ame`)
            }     
            break    
           default: 
        }        
}
loveAnimal()