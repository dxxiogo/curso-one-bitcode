let currentVelocity = 0;
let velocity = parseInt(currentVelocity)
let spaceshipName = prompt("Informe o nome da nave:");

let chosenOption = prompt("Escolha uma das opções:\n1- Acelerar a nave\n2- Desacelerar a nave\n3- Imprimir dados de bordo\n4- Sair do programa");

function speedUp(velocityP){ 
    velocity += 5;
}
function slowDown(velocityP){
    if(velocity == 0){
        velocity = 0;
    } else{
        velocity -= 5;
    }
}    
function printData(velocityP){
    alert(`Name: ${spaceshipName}\nCurrent speed: ${velocity}`)
}    
 function menu(){
     chosenOption = prompt("Escolha uma das opções:\n1- Acelerar a nave\n2- Desacelerar a nave\n3- Imprimir dados de bordo\n4- Sair do programa");
    switch(chosenOption){
        case "1":
            speedUp(velocity);
            break
        case "2":
            slowDown(velocity);
            break
        case "3":
            printData();
            break
        case "4":
            alert("Programa encerrando...");
            break
        default:         
            alert("Opção inválida!")           
    }
    return chosenOption;
}
console.log(menu())

while(menu() != 4){
    menu()
}

