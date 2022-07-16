let spaceshipInformation = new Object();

spaceshipInformation.name = prompt("Informe o nome da espaçonave: ");
spaceshipInformation.type = prompt("Informe o tipo da espaçonave: ");
spaceshipInformation["velocity"] = 0;
spaceshipInformation["maxVelocity"] = Number (prompt("Informe a velocidade máxima que a nave deve chegar: "));

let checkVelocity = function(velocity){
    if(velocity >= spaceshipInformation.maxVelocity){
        alert(`A velocidade atual é ${velocity}Km/s\n
        A velocidade máxima indicada é ${spaceshipInformation.maxVelocity}`)
    }
}

spaceshipInformation.speedUp = function(checkout){
    let choice;
    do{
       choice = prompt("Deseja parar ou acelerar?");
        switch(choice){
            case "Parar":
                alert(`Name: ${this.name}\nType: ${this.type}\nVelocity: ${this.velocity}`);
                break;
            case "Acelerar":    
                let acelleration = Number(prompt("Informe o quanto deseja acelerar: "))
                this.velocity += acelleration;
                checkout(this.velocity)
                break;
            default:    
        }
    } while( choice != "Parar");
}

console.table(spaceshipInformation)
console.log(spaceshipInformation.speedUp(checkVelocity))
