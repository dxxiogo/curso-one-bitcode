/* let optionChoose 
let cont
let choose = prompt("---------------------\n|  M E N U  |\n---------------------\n1- Contar de 0 a 10\n2- Contar de 10 a 0\n3- Encerrar programa.")

while(choose == "1" || choose == "2") {
    switch(choose){
        case "1":
            cont = 1
            while(cont <= 10){
                console.log(cont)
                cont ++
            }
            break
    case "2":
            cont = 10
            while(cont >= 1){
                console.log(cont)
                cont = cont - 1
            }
        break
            default:
            }
            
            choose = prompt("---------------------\n|  M E N U  |\n---------------------\n1- Contar de 0 a 10\n2- Contar de 10 a 0\n3- Encerrar programa.")
}
alert("Programa encerrado")      */  

let amountBrownhairMale
let amounthairBlondeFemale
let gender = prompt("SELETOR DE PESSOAS\nQual o gênero?")

let Age = prompt("SELETOR DE PESSOAS\nQual a idade?")

let hairColor = prompt("SELETOR DE PESSOAS\nQual a cor de cabelo?\n[1] Preto\n[2] Castanho\n[3] Loiro\n[4] Ruivo")

if(gender == "masculino" && Age >= 18 && hairColor == 2){
    amountBrownhairMale ++
} 
if(gender == "feminino" && Age >=15 && Age <= 30 && hairColor == 3){
    amounthairBlondeFemale ++
}

let continueSeletor = confirm("Deseja continuar?") 

while(continueSeletor == true){
    gender = prompt("SELETOR DE PESSOAS\nQual o gênero?")
     Age = prompt("SELETOR DE PESSOAS\nQual a idade?")
     hairColor = prompt("SELETOR DE PESSOAS\nQual a cor de cabelo?\n[1] Preto\n[2] Castanho\n[3] Loiro\n[4] Ruivo")
     if(gender == "masculino" && Age >= 18 && hairColor == 2){
         amountBrownhairMale ++
     } 
      if(gender == "feminino" && Age >=25 || Age <= 30 && hairColor == 3){
         amounthairBlondeFemale++
     }
     continueSeletor = confirm("Deseja continuar?")    
    }
alert(`Existe ${amountBrownhairMale} homens, com mais de 18 anos, com cabelos castanhos`)
alert(`Existe ${amounthairBlondeFemale} mulheres, entre 25 e 30 anos, loiras`)