/* const multilplicador=7
let contador=1

while (contador <=10 ){
    console.log( multilplicador * contador)
} */

function escreveTexto (texto){
    console.log(texto)
}

escreveTexto("oi!")

function soma(){
    return 5+3    
}

escreveTexto(soma())

function soma2 (n1, n2){
    return n1+n2
}

escreveTexto(soma2(9,5))


function divide (n1,n2){
    return n1/n2
}
escreveTexto(divide(9,3))
escreveTexto(divide(3,9).toFixed(4))