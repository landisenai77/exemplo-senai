const reta = document.querySelector('.reta')
const botao = document.querySelector(".btn")



function mudaclasse (){

    reta.classList.toggle('muda-cor')
}

botao.addEventListener("click", mudaclasse)