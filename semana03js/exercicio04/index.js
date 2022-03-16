
let departureDateEntry = prompt("Digite a data de nascimento: (formado DD/MM/YYYY")

let departureDate = moment(departureDateEntry, "DD/MM/YYYY") /* 
A váriavel foi criada para armazenar a conversão da resposta dada pelo usuário, e o moment será utilizado para a conversão da entrada de data, que foi em modo texto, para um formato de data.
*/
let today = moment()

let dateDiff = today - departureDate // diferença entre a data de de hoje e a data de partida , em que o moment trasforma as datas em milisegundos.

let chosenOption = prompt("Escolha como gostaria de exibir o tempo gasto de vida\n1- Segundos\n 2- Minutos\n 3- Horas\n 4- Dias " ) // Opção de escolher como os milisegundos convertidos na variável departureDate 

if(chosenOption == "1"){
    let secondsOfDeparture = Math.round(dateDiff/1000)
    document.write(`Tempo de vida: ${secondsOfDeparture} segundos`)
} else if(chosenOption == "2"){
    let minutesOfDeparture = Math.round(dateDiff / 1000/ 60 )
    document.write(`Tempo de vida: ${minutesOfDeparture} minutos`)
}
else if(chosenOption == "3"){
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600)
    document.write(`Tempo de vida: ${hoursOfDeparture} horas`)
} // 60 * 60 = 3600 que seria o 60 anterior que se refere a 60 segundos e 60 que se refere a horas em relação a minutos
else if(chosenOption == "4"){
    let daysOfDeparture = Math.round(dateDiff/ 1000 / 3600 / 24 )
    document.write(`Tempo de vida: ${daysOfDeparture} dias`)
} else{
    alert("Invalid option")
}