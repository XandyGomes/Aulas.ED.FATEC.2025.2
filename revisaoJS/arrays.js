var valores = [7, 8, 9, 10, 11]

console.log("Todos os valores: ",valores)
console.log("Posição 2 e 4:", valores[2], "e", valores[4])
console.log("Tammanho do vetor:", valores.length)

valores[5] = 20
console.log("Todos os valores depois de add o 20: ",valores)

valores.push(90)
valores.push(91)
valores.push(92)

console.log("Todos os valores depois do push() de três valores: ",valores)

valores.pop()

console.log("Todos valores depois do pop():",valores)