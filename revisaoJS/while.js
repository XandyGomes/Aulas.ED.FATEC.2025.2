function inteiroAleatorio(num){
    const valor = Math.random() * num //14*0,99 13,86 (13)
    return Math.floor(valor)
}

let opcao = 0

while(opcao != 10){
    opcao = inteiroAleatorio(14)
    console.log(`Opção escolhida foi ${opcao}`)
}