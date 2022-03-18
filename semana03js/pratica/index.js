let currencyValue = prompt("Qual o valor em real para a conversão?")
let optionConversion = prompt(`1- Dólar\n2-Euro\n3-Libra`)

switch(optionConversion){
    case "1":
        let dolarValue = currencyValue / 5.08
        alert(`Valor em real: ${currencyValue}\n Valor em dólar: ${dolarValue} `)
        break
    case "2":
        let euroValue = currencyValue / 5.62
        alert(`Valor em real: ${currencyValue}\n Valor em euro: ${euroValue} `)
        break
    case "3":
        let libraValue = currencyValue / 6.68
        alert(`Valor em real: ${currencyValue}\n Valor em libra: ${libraValue} `)
        break
    default:
        alert("Nenhuma opção foi encontrada")            
}