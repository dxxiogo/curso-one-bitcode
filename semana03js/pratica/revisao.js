
//CADASTRO 

let registration = new Object();

    registration.name = prompt("Informe o seu nome: ");
    registration.age = prompt("Informe sua idade: ");
    registration.cpf = prompt("Informe o seu cpf: ");
    let convertCpfString = registration.cpf.toString()
    while(convertCpfString.length != 10){
        alert("Informe um número válido para continuar o cadastro:")
        registration.cpf = prompt("Informe o seu cpf: ");
         convertCpfString = registration.cpf.toString();
         alert(convertCpfString.length);
    }

    let dataNumber = 2;
    let membersFamily = [];

    let numberOfFamilyMembers = prompt("Informe a quantidade de familiares da sua família:");
    for(let i = 0; i < numberOfFamilyMembers; i++){
          for(let k = 0 ; k < dataNumber; k++){
              let  nameMember = prompt(`Informe o nome do ${i + 1 }° familiar: `);
              membersFamily[i][k].push(nameMember);
              let ageMember = prompt(`Informe a idade do ${i + 1 }° familiar: `);
              membersFamily[i][k+1].push(ageMember);
          }  
    }
    const approvedFamilyMembers = membersFamily.filter((element) => element[1] > 18 && element[1] < 60 );
    alert("Familiares aprovados: " + approvedFamilyMembers)
