function greet(name){
    return `Hello, ${name}`
}

const nome =  (name) =>`Hello, ${name}`

function speakToMary(dialog){
    const text = dialog("Mary")
    return `He says "${text}"`
}
console.log(speakToMary(greet))


