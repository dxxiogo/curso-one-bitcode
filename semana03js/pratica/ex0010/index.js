/*Escreva um script que pergunta ao usuário se ele deseja converter uma temperatura de grau Celsius para Farenheit ou vice-versa. Para cada opção, crie uma função. Crie uma terceira, que é um menu para o usuário escolher a opção desejada, onde esse menu chama a função de conversão correta.*/

let opcao = prompt("Deseja fazer a conversão em:\n1- Celsius\n2- Farenheit");
menu(opcao);

function convertCelsius(temperature){
    let conversionCelsius = (temperature - 32) * 5/9;
    alert(`A temperatura ${temperature}F em Celsius e ${conversionCelsius}°C`);
    return conversionCelsius;
}
function convertFarenheit(temperature){
    let conversionFare = temperature * 9/5 + 32;
    alert(`A temperatura ${temperature}°C em Farenheit e ${conversionFare}`);
    return conversionFare;
}

function menu(opcao){
    let temperature = prompt("Informe a temperatura:");
    let convertTempInNumber = parseFloat(temperature);
    if(opcao == "1"){
      convertCelsius(convertTempInNumber);
    } else if(opcao == "2"){
              convertFarenheit(convertTempInNumber)
            }  
}

