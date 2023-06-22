const peso = 59
const altura = 1.65


function calcular (peso,altura){ 
    const imc = peso / (altura*altura)

    if(imc < 18.5){
        return  "Baixo peso"
    }if(imc<25){
        return "Normal"
    }if(imc < 30){
        return "sobrepeso"
    }else{
        return "Obeso"
    }
}

console.log(calcular(peso,altura))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const n1=21
const n2=21

function enumerada(n1,n2){
            
            if(n1>n2){

            console.log("n1 é maior que n2" )
            }if(n1<n2){
            console.log("n2 é maior que n1")
     }else{
        console.log("ambos números são iguais")
     }

}

enumerada(n1,n2)



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const idade=20

function faixaetária (idade){
    if(idade>60){
        console.log("idoso")
    }if(idade>18){
        console.log("adulto")
    }if(idade>13){
        console.log("adolecente")
    }else{
        console.log("criança")
    }
}

faixaetária(idade)

