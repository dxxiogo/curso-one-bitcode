let birthDay = prompt("Digite sua data de nascimento: (formato DD/MM/YYYY")

let convertBirthDay = moment(birthDay, "DD/MM/YYYY")
let today =  moment()

//Subtração da diferença da data de hoje, com a data de nascimento usuário
let dateDiff = today - convertBirthDay

let secondsOfDeparture = Math.round(dateDiff/1000)
let minutesOfDeparture = Math.round(dateDiff/1000/60)
let hoursOfDeparture = Math.round(dateDiff/1000/3600)

alert(`Data de nascimento: ${birthDay}\n Dia atual: ${today}\nSegundos vividos: ${secondsOfDeparture}\nMinutos vivivos: ${minutesOfDeparture}\nHoras vividas: ${hoursOfDeparture} `)
