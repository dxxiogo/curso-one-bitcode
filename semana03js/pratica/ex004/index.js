
let hab = prompt("Digite o número de habitantes")
let taxa = prompt("Escolha que taxa será calculada:\n1- Natalidade\n2- Mortalidade")

let natalidade
let mortalidade
let taxaValue

switch(taxa){
    case "1":
         natalidade = prompt("Digite a quantidade de crianças nascidas:")
        taxaValue = (natalidade * 1000)/hab
        document.write(`A taxa de natalidade de sua região é ${taxaValue} habitantes`)
        break
    case "2":
        mortalidade = prompt("Digite o número de óbitos")
        taxaValue = (mortalidade * 1000)/hab
        document.write(`A taxa de mortalidade é ${taxaValue} habitantes`)
        break
    default:
        alert("Valor ou taxa não identificados")       
}