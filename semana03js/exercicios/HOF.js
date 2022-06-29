function doubleVelocity(velocity, printer){
    console.log("Entrei em doubleVelocity");
    let newVelocity = velocity * 2;
    printer(newVelocity); /* Isso seria um callback, uma chamada de uma função que irá ser atribuida no parâmetro printer da função doubleVelocity, e vai atribuir para o parâmetro o valor de newVelocity*/
    return newVelocity;
}

let printVelocity = (velocity) => {
    console.log(`A nova velocidade é ${velocity}`);
} //Essa função receberá como parâmetro newVelocity e será o valor de uma parâmetro para a função doubleVelocity

let newVelocity = doubleVelocity(60, printVelocity); //Chama a função atribuindo ela a uma variável, e dando ao parâmetro velocity 60, e a função printVelocity para o parâmetro printer



console.log(newVelocity)