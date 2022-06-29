/*7. Faça uma função que verifique se um valor é perfeito ou não. Um valor é dito perfeito quando ele é igual a soma dos seus divisores excetuando ele próprio. (Ex: 6 é perfeito, 6 = 1 + 2 + 3, que são seus divisores). A função deve retornar um valor booleano.*/
let somaDiv = 0;
function perfectNum(num){
    for(let i = 1; i < num; i++){
      if(num%i == 0){
         somaDiv += i
      }
    }
    if(somaDiv == num){
        return true;
    } else {
       return false;
       }
       
}
console.log(perfectNum(496));