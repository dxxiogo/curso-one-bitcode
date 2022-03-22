let agePerson = prompt("Qual sua idade?")
while(agePerson = ""){
    let confirmar = confirm("Você deseja continuar?")
    if(confirmar == true){
        prompt("Qual sua idade?")
    }
}