function inteiroAleatorio(num){
    const valor = Math.random() * num //14*0,99 13,86 (13)
    return Math.floor(valor)
}

let opcao

do{
    opcao = inteiroAleatorio(14)
    console.log(`Opção escolhida foi ${opcao}`)
}while(opcao != 12 )