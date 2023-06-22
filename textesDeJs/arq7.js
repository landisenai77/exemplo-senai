const nota=21
const faltas=2
const aulas=10


if(nota>20){
    console.log('1')
}else{
    console.log('2')
}


if(faltas<0.25*aulas){
    console.log('1')
}else{
    console.log('2')
}

if(nota >= 20 && faltas <= 0.25 * aulas){
    console.log("você está APROVADO")
}else{
    console.log("você esta REPROVADO")
}