
alert("Bem vindo(a) ao sistema de conversão de moedas! A seguir necessitaremos algumas informações")

let userName = prompt("Qual é o seu nome?")
let chooseCoin = prompt("Você deseja o real converter em que moeda?\n1- Dolár \n2- Euro\n3- Libra")

while(chooseCoin != "1" && chooseCoin != "2" && chooseCoin != "3" ){
    alert("Não convertemos essa moeda. Tente novamente.")
    chooseOption = prompt("Você deseja o real converter em que moeda?\n1- Dolár \n2- Euro\n3- Libra")
}

let realMoney = prompt("Quanto dinheiro você deseja converter?")

let conversionMoney 
switch(chooseCoin){
    case "1":
        conversionMoney = realMoney/4.80
        alert(`Você pode comprar U$${conversionMoney} com R$${realMoney}`)
        break
    case "2":
        conversionMoney = realMoney/5.19
        alert(`Você pode comprar €$${conversionMoney} com R$${realMoney}`)
        break
    case "3":
        conversionMoney = realMoney/6.16
        alert(`Você pode comprar £${conversionMoney} com R$${realMoney}`)
       break
    default:
        window.document.write("Não foi possível a conversão.Recarregue a página e tente novamente.")                    
}
