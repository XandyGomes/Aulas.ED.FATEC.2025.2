function buscaSequencial(vetor, valorBusca) {

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] === valorBusca) return i
    }
    return -1

}

const frutas = ["laranja", "maçã", "uva", "pera", "jabuticaba", "limão"];
console.log("Posição de uva:", buscaSequencial(frutas, "uva"));

import { nomes } from "./data/vetor-nomes.mjs"

console.time("Buscando ALEXANDRE...")
console.log("Posição de ALEXANDRE", buscaSequencial(nomes, "ALEXANDRE") )
console.timeEnd("Buscando ALEXANDRE...")

console.time("Buscando JOAO...")
console.log("Posição de JOAO", buscaSequencial(nomes, "JOAO") )
console.timeEnd("Buscando JOAO...")

console.time("Buscando ORKUTILSON...")
console.log("Posição de ORKUTILSON", buscaSequencial(nomes, "ORKUTILSON") )
console.timeEnd("Buscando ORKUTILSON...")