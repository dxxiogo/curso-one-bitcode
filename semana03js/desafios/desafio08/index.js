let velocity = 0;
let choseeOption = ""
let spaceship = prompt("Qual o nome da nave?")


function speedUp(){
    velocity += 5
    return velocity
}

function slowDown(){
    if(velocity > 0){
        velocity -= 5
    }else{
        velocity = 0
    }
    return velocity
}

function printData(){
    alert(`O nome da nave é ${spaceship}\nA velociade atual: ${velocity}km/s`)
}

function menu(){
    choseeOption = prompt("Escolha as seguintes opções:\n1- Acelerar a nave em 5km/s\n2- Desacelerar a nave em 5km/s\n3- Imprimir dados de bordo\n4-Sair do programa");
    switch(choseeOption){
        case "1":
            speedUp()
        break
        case "2":
            slowDown()
        break    
        case "3":
            printData()
        break 
    }
    return choseeOption
}
menu()
while(choseeOption != "4"){
   menu()
}