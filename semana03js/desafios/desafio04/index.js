//Conversor de distância espacial

let distanceOfYearsLight = prompt("Digite a distância em anos-luz:")

let chooseOption = prompt("Qual operação deseja realizar?\n1- Parsec\n2- Unidade astronômica\n3- Quilômetros(Km)")

switch(chooseOption){
    case "1":
        let parsec = distanceOfYearsLight * 0.306601;
        alert(`Distância em anos luz: ${distanceOfYearsLight}\nDistância em parsec: ${parsec}pc `)
    break
    case "2":
        let astronomicUnity = distanceOfYearsLight * 63241.1
        alert(`Distância em anos luz: ${distanceOfYearsLight}\nDistância em Unidade Astronômica: ${astronomicUnity}AU `) 
    break
    case "3":
        let km = distanceOfYearsLight * (9.5 * Math.pow(10, 12))
        alert(`Distância em anos luz: ${distanceOfYearsLight}\nDistância em Quilômetros: ${km}km `)    
    break
    default:
        alert("Valores inválidos")    
}