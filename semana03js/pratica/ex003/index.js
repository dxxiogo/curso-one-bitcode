let valorCompra = prompt("Digite o valor da compra:")
let cliente = prompt("Você é um cliente:\n1- Comum\n2- Funcionário\n3- Vip")

let desconto
let finalValueVip

switch (cliente) {
    case "1":
        alert("Não há descontos para clientes comuns")
        break;
    case "2":
        desconto = valorCompra * 10/100    
        let finalValue = valorCompra - desconto  
        alert(`Você é um funcionário\nDesconto: 10%\nValor: ${desconto}\nValor total: ${finalValue}`)
        break
    case "3":
        desconto = valorCompra * 5/100  
         finalValueVip = valorCompra - desconto  
        alert(`Você é VIP\nDesconto: 5%\nValor: ${desconto}\nValor total: ${finalValueVip}`)
        break
    default:
        alert("Valor não indentificado!")
}