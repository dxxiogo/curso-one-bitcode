function friendship(boyfriend = "Diogo", girlfriend){
     console.log(`O casal será ${boyfriend} e ${girlfriend}`)
}


function addAge(boyAge, girlAge){
    let agesoma = boyAge + girlAge
    console.log("A soma de idade do casal é: " + agesoma)
}

addAge(19, 15)

function friendshipAction(){
    let trair = confirm(`O seu namorado está te traindo?`)
    while(trair == true){
        console.log("Termina com ele")
        trair = confirm("O seu namorado está te traindo?")
    }
    console.log("Casal perfeito!")
    }

    friendship( )
