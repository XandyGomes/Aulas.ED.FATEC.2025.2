const facul = "FATEC"
const cpf = "28875693225"
var a, b, c, d, e

a = parseInt(cpf.charAt(0))
b = parseInt(cpf.charAt(1))
c = cpf.charAt(2)
d = cpf.charAt(3)
e = cpf.charAt(4)

console.log(a+b)

a = facul.charAt(0)
b = facul.charAt(1)
c = facul.charAt(2)
d = facul.charAt(3)
e = facul.charAt(4)

console.log(a,b,c,d,e)

console.log(a+b+c+d+e)

console.log(facul.charAt(4))

console.log(facul.charCodeAt(1))

console.log(facul.indexOf("C"))

console.log(facul.substring(1,4))

console.log("Faculdade ".concat(facul).concat("!!!"))

console.log(facul.replace("F", 3))

console.log("Alexandre, Joao, Pedro".split(", "))

const nomes = ["alexandre", "joao", "maria", "sergio"]

console.log(nomes.slice(1,3))
