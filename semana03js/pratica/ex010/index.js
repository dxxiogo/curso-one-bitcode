let contador = 30
while(contador > 0){
    if(contador%2 == 0){
        console.log(`[${contador}]`)
    }else{
        console.log(contador)
    }
    contador -= 1
}

for(let contador = 100; contador >= 0; contador -=10 ){
    console.log(contador)
}


function media(mediaFirst, mediaSecond){
    return (mediaFirst + mediaSecond)/ 2
}

function Potencial(base, expoente){
    return Math.pow(base, expoente)
}

function media(mediaFirst, mediaSecond){
    let media = (mediaFirst + mediaSecond)/2
     return media
}
function situation(media){
    if(media <= 4){
        console.log("REPROVADO!")
    }else if(media >= 5 || media <= 6 ){
        console.log("RECUPERAÇÃO!")
    } else {
        console.log("APROVADO! PARABÉNS!")
    }
} 
console.log(media(6, 5))
console.log(situation())