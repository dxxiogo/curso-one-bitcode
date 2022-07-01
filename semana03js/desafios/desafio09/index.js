function computarBordo(velocity, printer){
    let slowDown = 20;
    for(let i = velocity; i >= 0; i -= slowDown){
        printer(i);
    }
    console.log("A nave está parada, as comportas estão prontas para serem abertas.");
    return velocity;
}

let printando = newVelocity => {
    console.log(`A velocidade atual é ${newVelocity}km/s`);
}


computarBordo(150, printando);


