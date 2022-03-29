let spaceship = prompt("Qual o nome da nave?")
let velocity = 0
let chosenOption

function showMenu(){
    let option
    while(option != "1" && option != "2" && option != "3" && option != "4"){
        option = prompt("O que deseja fazer:\n1- Acelerar em 5km/s\n2- Desacelerar em 5km/s\n3- Imprimir dados\n4- Sair do programa")
      }
      return option
    }

    function speedUp(velocity){
        let newVelocity = velocity + 5
        return newVelocity
    }

    function slowDown(velocity){
        let newVelocity
        if(velocity == 0){
            newVelocity = 0
        } else{
            newVelocity = velocity - 5
        }
        return newVelocity
    }

    function optionData(name, velocity){
        alert(`Espaçonave: ${spaceship}\nVelocidade: ${velocity}km/s`)
    }   

do{
    chosenOption = showMenu()
    switch(chosenOption){
        case "1":
            velocity = speedUp(velocity)
            break
        case "2":
            velocity = slowDown(velocity)
            break
        case "3":
            optionData(spaceship, velocity)
            break
        default:
            alert("Encerrando o programa...")    
    }
} while(chosenOption != "4")



/*let aceleration = 5
let newVelocity 

function appAction(){
    function speedUp(){
        newVelocity = velocity + aceleration
        return newVelocity
    }
    function slowDown(){
        if(velocity == 0){
            newVelocity = 0
        }else{
            newVelocity = velocity - aceleration
        }
        return newVelocity
    }
    function optionData(){
        alert(`Nave: ${spaceship}\nVelocidade: ${newVelocity}`)
    }
    function optionChoosen(){ 
        let menu = prompt("Você deseja:\n1- Acelerar a nave em 5km/s\n2- Desacelerar a nave em 5km/s\n3- Imprimir dados de bordo\n4- Sair do programa")
        return menu
    }
    while(menu == "1" && optionChoosen == "2" && optionChoosen == "3"){
        switch(optionChoosen){
            case "1":
                speedUp()
                break
            case "2":
                slowDown()
                break
            case "3":
                optionData()
                break
            case "4":
                break
           default:                       
        }
        optionChoosen = prompt("Você deseja:\n1- Acelerar a nave em 5km/s\n2- Desacelerar a nave em 5km/s\n3- Imprimir dados de bordo\n4- Sair do programa")
    }
}
appAction() */