var tbusuarios = document.querySelector('#tbusuarios')
var tbprodutos = document.querySelector('#tbprodutos')
var btncor = document.querySelector('.btncor')
var titulo = document.querySelector('#titulo')

document.querySelector('#btnusuarios').addEventListener('click', () => {
    tbusuarios.style.left = "20%"
    tbprodutos.style.left = "200rem"
    btncor.style.left = "0px"
    titulo.innerHTML="Registro de Usuários"
})
document.querySelector('#btnprodutos').addEventListener('click', () => {
    tbusuarios.style.left = "-200rem"
    tbprodutos.style.left = "-187rem"
    btncor.style.left = "155px"
    titulo.innerHTML="Registro de Produtos"
})