/* const nome='Igor'
const nota=73


function avaliaNota(nota, nome){
    if(nota>=70){
        return `${nome} está APROVADO`
    }if(nota>=50){
        return `${nome} está de recuperação`
    }else{
        return `${nome} está reprovado`
    }
} */
/* 
console.log(avaliaNota(nota, nome)) */


const listanomes=new Array(
    "João",
    "Maria",
    "Carlos",
    "Carla",
    "Ricardo"
)

const nomeprocurado="Carlos"

function procuranome(lista, valorprocurado){

    let valorncontrado = ""

        for(let i = 0 ; i < lista.length; i++){
            if(lista[i] == valorprocurado){
                valorencontrado=true
                break
            }else{
                valorencontrado=false
            }
        }

        if(valorencontrado == true){
            console.log("encontrado!")
        }else{
            console.log("não encontrado")
        }
}

procuranome(listanomes,nomeprocurado)