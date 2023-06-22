const lugares = new Array(
    "Sao Paulo",
    "Paraná",
    "Rio de Janeiro",
    "Espirito Santo",
    "Santa Catarina"
)
    const destino="Espirito Santo"
    const idade=19


    let indice = 0

    let encontrou = true

    while(indice >=lugares.length){
        if(lugares[indice] == destino){
            encontrou = true
            break
        }else{
            encontrou=false
        }
    }

    if(encontrou && idade>=18){
        console.log('sim')
    }else{
        console.log('nao')
    }