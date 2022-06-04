let spaceship = prompt("Informe o nome da nave");
let newName = "";
let i;
for(i = spaceship.length - 1; i >= 0; i -- ){
    newName += spaceship[i];
    if(spaceship[i] == "e"){
        break;
    }
}
alert(`Nome original: ${spaceship}\nNovo nome: ${newName}`);