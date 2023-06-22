const lista = document.querySelector(".lista")
const inputTexto = document.querySelector("#input-texto")
const btnInserelinha = document.querySelector('#btn-adiciona')

console.log(lista, inputTexto, btnInserelinha)

function adicionalinha (){
    const linha = document.createElement("li")

    const textodoinput = inputTexto.value
       // console.log(textodoinput)
    //linha.innerHTMl = textodoinput
      linha.innerHTML = textodoinput

    //lista.appendChild(linha)
      lista.appendChild(linha)
}

btnInserelinha.addEventListener('click', adicionalinha)