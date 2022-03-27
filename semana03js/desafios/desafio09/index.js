let spaceship = prompt("Qual o nome da nave?")
let velocity = 0

function actionApp(){
    let chooseOption = prompt("Escolha:\n1- Acelerar a nave em 5km/s\n2- Desacelerar em 5km/s\n3-Imprimir dados de bordo\n4- Sair do programa")
    switch (chooseOption){
        case "1":
            velocity += 5
            alert("Velocidade atual: " + velocity)
            break
            case "2":
                if(velocity == 0){
                    alert("Não foi possível desacelerar, a velocidade é 0")
                }
                velocity -= 5
                alert("Velocidade atual: " + velocity)
                break    
        case "3":
            alert(`Velocidade atual: ${velocity}\nNome da nave: ${spaceship}`)
            }

    while(chooseOption == "1" && chooseOption == "2" && chooseOption == "3"){
        prompt("Escolha:\n1- Acelerar a nave em 5km/s\n2- Desacelerar em 5km/s\n3-Imprimir dados de bordo\n4- Sair do programa")
    }
}
actionApp()