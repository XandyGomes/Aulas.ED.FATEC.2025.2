let comps
function buscaBinaria(vetor, valorBusca){
    comps = 0
    let ini = 0
    let fim = vetor.length -1

    while(fim >= ini){
        comps++
        let meio = Math.floor( (ini + fim) / 2 )
        if(valorBusca === vetor[meio]){
            comps++
            return meio
        }else if(valorBusca > vetor[meio]){
            comps += 2
            ini = meio + 1
        }else{
            comps += 2
            fim = meio - 1
        }
    }
    return -1
}

// let nums = [0,11,22,33,44,55,66,77,88,99]
// let numeroBusca = 11

// console.time(`Buscando ${numeroBusca}...`)
// console.log(`Posição de ${numeroBusca}:`, buscaBinaria(nums, numeroBusca) )
// console.timeEnd(`Buscando ${numeroBusca}...`)

import { nomes } from './data/vetor-nomes.mjs'

let nomeBusca = "ALEXANDRE"

console.time(`Buscando ${nomeBusca}...`)
console.log(`Posição de ${nomeBusca}:`, buscaBinaria(nomes, nomeBusca), "Comparações: ", comps )
console.timeEnd(`Buscando ${nomeBusca}...`)
