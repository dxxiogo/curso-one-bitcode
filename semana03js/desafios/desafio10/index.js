const hitchedSpaceships = [
                        ["Fenix", 8, true],
                        ["Golias", 10, true],
                        ["Helmet", 5, false],
                        ["Elemental", 3, true],
                        ["Darwin", 15, false]
]

const spaceship9orMore = hitchedSpaceships.filter((spaceship) => spaceship[1] >= 9 ).map((spaceship) => spaceship[0]);

console.log(spaceship9orMore)

const spaceshipWithPendantHitch = hitchedSpaceships.findIndex( element => element[2] == false)

const spaceshipsUpperCase = hitchedSpaceships.map((element) => {
    let upperCase = element[0].toUpperCase();
    return upperCase;
})

let message = `Naves com 9 ou mais tripulantes: ${spaceship9orMore.join(", ")}\nNaves: ${spaceshipsUpperCase.join(", ")}\nPlataforma com engate pendente: ${spaceshipWithPendantHitch +1}`

alert(message)

