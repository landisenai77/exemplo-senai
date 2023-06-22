const LI = document.querySelectorAll(".filtralinha")
const inputFiltro = document.querySelector("#inputfiltra")

console.log(LI,inputFiltro)

function filtrar (event){

    const textoInput = inputFiltro.value.toUpperCase()

    for(let index=0; index < LI.length; index++){

        const linhaAtual = LI[index]
        /* const conteudoLinhaAtual = linhaAtual.textContent */
        const conteudoLinhaAtual = LI[index].textContent

        if(conteudoLinhaAtual.toUpperCase().includes(textoInput)){
            linhaAtual.style.display =""
        }else{
            linhaAtual.style.display="none"
        }
    }
}

inputFiltro.addEventListener("keyup", filtrar)