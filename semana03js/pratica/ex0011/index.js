/*Faça um programa, com uma função que necessite de três argumentos, e que forneça a soma desses três argumentos através de uma função. Seu script também deve fornecer a média dos três números, através de uma segunda função que chama a primeira.*/

function calculo (n1, n2, n3){
    return n1 + n2 + n3;
}
function media(soma){
    let valorMedia = soma/3;
    console.log(valorMedia)
}

let soma = calculo(8, 9, 10)

media(soma)

/*Faça um programa que recebe três números do usuário, e identifica o maior através de uma função e o menor número através de outra função.*/
//let numberFirst = prompt("Informe um número:");
//let numerSecond = prompt("Informe o segundo número:");
//let numberThird = prompt("Informe o terceiro número: ");

function bigger(a, b, c){
    if(a > b && a > c){
        return a;
    } else if(b > a && b > c){
        return b;
        } else{
            return c;
        }
}

function smaller(a, b, c){
    if(a < b && a < c){
        return a;
      } else if (a > b && b < c){
        return b; 
        } else{
            return c;
        }
}

let biggerNumber = bigger(numberFirst, numerSecond, numberThird);
let smallerNumber = smaller(numberFirst, numerSecond, numberThird);


/* -----------------------------------------------------*/

let num = prompt("Informe um número: ");
let cont;

function repeatToN(num){
    for(cont = 1; cont < num; cont++){
        for(let i = 1; i < cont;  i++ ){
            console.log(`${cont}, ${i}`)
        }
    }

}

repeatToN(num)



