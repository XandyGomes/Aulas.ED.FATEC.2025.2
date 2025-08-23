function buscaSequencial(vetor, fnComp) {
  for (let i = 0; i < vetor.length; i++) {
    if (fnComp(vetor[i])) return i;
  }
  return -1;
}

// function comparaNome(obj){
//     return obj.first_name === "ALEXANDRE"
// }
var nome = "FULANO"
function comparaNome(obj){
    return obj.first_name === nome
}

import { objNomes } from "./data/vetor-obj-nomes.mjs"

console.time(`Buscando ${nome}...`)
console.log(`Posição de ${nome}:`, buscaSequencial(objNomes, comparaNome) )
console.timeEnd(`Buscando ${nome}...`)

