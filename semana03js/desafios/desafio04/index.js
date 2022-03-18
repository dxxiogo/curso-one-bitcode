 let distanciaAnosLuz = prompt("Qual a distância em anos-luz?")
let opera= prompt("Opções: \n1- Parsec(pc)\n2- Unidade astronômica(AU)\n3- Quilômetros (km)\nObs: Digite apenas o número da opção")
switch(opera){
    case "1":
        let parsec = distanciaAnosLuz * 0.306601
        alert(`Distância em Anos-luz: ${distanciaAnosLuz}\nConversão desejada (pc): ${parsec}` )
    break
    case "2":
        let  unidadeAstro = distanciaAnosLuz * 63241.1 
        alert(`Distância em Anos-luz: ${distanciaAnosLuz}\nConversão desejada (AU): ${unidadeAstro}` )
    break
    case "3":
        let Quilometro = distanciaAnosLuz * 9.5 * Math.pow(10, 12)   
        alert(`<p>Distância em Anos-luz: ${distanciaAnosLuz}\nConversão desejada (Km): ${Quilometro}` )
    break
    default:
        alert(`Distância em Anos-luz: ${distanciaAnosLuz}\nConversão desejada: Unidade não indentificada` )
}
