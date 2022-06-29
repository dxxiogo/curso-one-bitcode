/*2. Escreva um procedimento que recebe as 3 notas de um aluno por parâmetro e uma letra. Se a letra for A o procedimento calcula a média aritmética das notas do aluno, se for P, a sua média ponderada (pesos: 5, 3 e 2) e se for H, a sua média harmônica. A média calculada também deve retornar por parâmetro.*/

function media(nota1, nota2, nota3, tipo, printer){
        if(tipo == "A"){
            let mediaAritmetica = (nota1 + nota2 + nota3)/3;
            printer("A", mediaAritmetica);
            return mediaAritmetica;
        } else if(tipo == "P"){
            let mediaPonderada = (2 * nota1 + 2 * nota2 + 1 * nota3)/2 + 2 + 1;
            printer("P", mediaPonderada);
            return mediaPonderada;
        } else if(tipo == "H"){
            let inverso = 1/nota1 + 1/nota2 + 1/nota3;
            let mediaHarmonica = 3/inverso;
            printer("H", mediaHarmonica);
            return mediaHarmonica;  
        } 
  }
  
  let informaMedia = function (tipo, media){
      switch(tipo){
        case "A":
          alert(`Tipo: média aritmética\nMédia: ${media}`);
          break;
        case "P":
          alert(`Tipo: média ponderada\nMédia: ${media}`);
          break;
        case "H":
          alert(`Tipo: média harmônica\nMédia: ${media}`);
          break;
        default:
          alert("Média não encontrada.");
      } 
  }
  
  media(8, 9, 9.5, "H", informaMedia);