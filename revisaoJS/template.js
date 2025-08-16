const nome1 = "Concatenar"
const concatenar = "Olá " + nome1 + "!"

console.log(concatenar)

const nome2 = "Template"
const template = `Olá ${nome2}, tudo bem com você?`
console.log(template)

function conversaoMaiuscula(m){
    return m.toUpperCase()
}

console.log(`Olá ${conversaoMaiuscula("fat")}ecanos, tudo bem?`)