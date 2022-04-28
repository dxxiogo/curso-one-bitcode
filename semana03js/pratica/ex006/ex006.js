let widthWall = prompt("Digite a largura da parede:")
let heightWall = prompt("Digite a altura da parede")
let areaWall = widthWall * heightWall

let areaPaint = areaWall/ 2

alert(`Área da Parede: ${areaWall} m²\nQuantidade de tinta necessária para a pintura: ${areaPaint}l`) 

//Equação do 2° grau

let A = prompt ("Digite o valor de A:")
let B = prompt("Digite o valor de B")
let C = prompt("Digite o valor de C:")

let convertA = parseInt(A)
let convertB = parseInt(B)
let convertC = parseInt(C)

let delta = Math.pow(B, 2) - 4 * A * C

alert("O valor de delta na equação é: " + delta)


//Porcetagem

let priceProduct = prompt("Digite o preço  do produto:")

let descontProduct = priceProduct * 5/100

alert(`Preço original: R$${priceProduct}\nPreço com desconto: R$${descontProduct}`) 

//Locadora de carros

let Km = 0.20
let days = 90

let daysOfUse = prompt("Quantos dias foi locado?") 

let kmRunning = prompt("Quantos quilometros fora percorridos?")

let totalDaysUse = days * daysOfUse
let totalKmRunning = Km * 20

let totalValue = totalDaysUse + totalKmRunning

alert(`Dias locados: ${daysOfUse} dias\nQuilometros percorridos: ${kmRunning}Km\nCusto: R$${totalValue}`)

//Carga horária do funcionário


let hoursWorking = 8
let moneyPerHours = 25
let daysWorking = prompt("Dias trabalhados no mês:")

let salary = (hoursWorking * moneyPerHours) * daysWorking

alert(`Dias trabalhados: ${daysWorking}\nSalário: ${salary}`) 

//Média de vida do fumante

let smokedCigarette = prompt("Quantos cigarros você fuma por dias?")
 let yearsSmokedCigarette = prompt("Por quantos anos você já fumou?")

 let smokeADay = 10
if(yearsSmokedCigarette >= 2){
    yearsSmokedCigarette *= 365
} else{
    yearsSmokedCigarette = 365
}

 let minutesLost = smokedCigarette * smokeADay
 let yearsSmoking = minutesLost * smokedCigarette
 let totalDaysLost = yearsSmoking/24
  
alert(`Você já perdeu ${totalDaysLost} dias da sua vida, por fumar ${smokedCigarette} cigarros por dia, durante ${yearsSmokedCigarette} dias,`)


