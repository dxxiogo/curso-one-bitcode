let spaceship = prompt("Qual o nome da nave?")
let velocity = 0
let acceleration = 5
velocity = prompt("Qual a velocidade atual?")
let menu = prompt("1- Acelerar a nave em 5km/s\n2- Desacelerar em 5km/s\n3- Imprimir dados de bordo\n4- Sair do programa") 
function appAction(){
    while(menu >= 5 || menu < 1 ){
        menu = prompt("1- Acelerar a nave em 5km/s\n2- Desacelerar em 5km/s\n3- Imprimir dados de bordo\n4- Sair do programa") 
    }
    switch(menu){
        case "1":
            function newacceleration(){
                velocity += acceleration
            }
            newacceleration()
            alert("Velocidade atual: " + velocity)
            break
        case "2":
            function desacelerar(){
                if(velocity == 0){
                    alert("A velocidade é 0, não é possível desacelerar")
                }else{
                    velocity -= acceleration
                }
                alert("Velocidade atual: " + velocity)
                }    
                desacelerar()
                break
        case "3":
            function dates(){
                    alert(`Nome da nave: ${spaceship}\nVelocidade atual: ${velocity}`)  
                }  
                dates()
                break
        case "4":
                break
                    default:     
                }
            }
            appAction()
            