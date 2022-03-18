let name = prompt("Qual o seu nome?")
let inicialVelocity = 0
inicialVelocity = prompt("A que velocidade você gostaria de acelerar a nave?")
confirm(`Você realmente deseja ir para a velocidade de ${inicialVelocity} Km/s?`)
 if(inicialVelocity <= 0){
     alert("Nave está parada. Considere partir e aumentar a velocidade.")
 }else if(inicialVelocity <= 40 && inicialVelocity < 80){
     alert("Parece uma boa velocidade para manter")
 }else if( inicialVelocity >= 80 && inicialVelocity < 100){
     alert("Velocidade alta! Considere diminuir")
 }else if( inicialVelocity >= 100){
     alert("Velocidade perigosa!!! Controle automático forçado.")
 }
 document.write(`<p> Nome: ${name}</p>`)
 document.write(`<p> Velocidade atual: ${inicialVelocity} Km/s</p> `)