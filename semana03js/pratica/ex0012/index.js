
let num1 = prompt("Informe o primeiro numero:");
let num2 = prompt("Informe o segundo numero:");
let opera = prompt("Informe o operador:"); 



alert(calculadora(num1, num2, opera));

function calculadora(number1, number2, operador = "+"){
    switch(operador){
        case "+":
            let convertNum = parseInt(number2);
            let convertNum2 = parseInt(number2);
            let soma = convertNum + convertNum2;
            return soma;
        case "-":    
            let subtracao = number1 - number2;
            return subtracao
        case "*":
            let multiplicacao = number1 * number2;
            return multiplicacao;   
        case "/":
            let divisao = number1/number2;
            return divisao;        
    }        
}
