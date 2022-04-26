let userName = prompt("Qual é o seu nome?")
let velocity = 0
let confirmation

function veloctyAction(){
    velocity = prompt("A que velocidade você gostaria de acelerar a naave?")
    
     confirmation = confirm(`Você realmente deseja ir para a velocidade de ${velocity}Km/s?`)

    if(velocity <= 0){
        alert("Nave parada. Considere partir e aumentar a velocidade")
    } else if( velocity < 40){
        alert("Você está devagar podemos acelerar mais")
    } else if(velocity >= 40 && velocity < 80){
        alert("Parece uma boa velocidade para manter")
    } else if(velocity >= 80 && velocity <= 100){
        alert("Velocidade alta. Considere diminuir")
    } else if(velocity > 100){
        alert("Velocidade perigosa. Controle automático forçado")
    }
    alert(`Condutor: ${userName}\nVelocidade: ${velocity}Km/s`)
} 
veloctyAction()

let askConfirmation = confirm("Deseja continuar?") 

while(askConfirmation == true){
    veloctyAction()
    askConfirmation = confirm("Deseja continuar?") 
}