let valores = [1,24,5,6,7,684]

/*

for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}


let pos = valores.indexOf(1)
if (pos== -1) {
    console.log(`Valor não encontrado`)
} else {
    console.log(`Valor ${pos}`)
}
