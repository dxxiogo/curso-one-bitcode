let departureDateEntry= prompt("Digite a data de partida: (formato DD/MM/YYYY")

//armazenar a conversão da data fornecida anteriormente.
let departureDate = moment(departureDateEntry, "DD/MM/YYYY") // O moment converteu o texto da váriavél departureDateEntry em formato de data

//
let today = moment() // retorna a data de hoje

let dateDiff = today - departureDate // cálculo da diferença da data de hoje com a data de partida da nave

//O momento transforma a data em milisegundos

let chosenOption = prompt("Escolha um tempo de partida\n1- Segundos\n2- MInutos\n3- Horas\n4- Dias")

if(chosenOption == "1"){
    let secondsOfDeparture = Math.round(dateDiff/1000) //round vai arredondar um valor quebrado
    alert(`Tempo de vôo: ${secondsOfDeparture} segundos`)
} else if( chosenOption == "2"){
    let minutesOfDeparture = Math.round(dateDiff/1000/60)
    alert(`Tempo de vôo: ${minutesOfDeparture} minutos`)
} else if (chosenOption == "3"){
    let hoursOfDeparture = Math.round(dateDiff/1000/3600)
    alert(`Tempo de vôo: ${hoursOfDeparture} horas`)
} else if (chosenOption == "4"){
    let daysOfDeparture = Math.round(dateDiff/1000/3600/24)
    alert(`Tempo de vôo: ${daysOfDeparture} dias`)
}
