// Array - método reduce()

const rockets = [
    {country: "Russia", launches: 32},
    {country: "US", launches: 23},
    {country: "China", launches: 16},
    {country: "Spain", launches: 7},
    {country: "India", launches: 4},
    {country: "Japan", launches: 3},
]

const totalLaunches = rockets.reduce((prevVal, element) => prevVal + element.launches, 0);

console.log(totalLaunches )