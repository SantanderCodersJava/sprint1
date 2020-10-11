// Define a largura da barra de navegação lateral para 250 px
function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.querySelector(".principal").style.margin = "0 0 0 270px";
}

// Define a largura da barra de navegação lateral para 0 (fechar a barra de navegação)
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector(".principal").style.marginLeft = "100px";
}

function mostrarMinhasDoacoes(){
    document.querySelector(".principal").style.display= "block";
}
function paginaEmBranco(){
    document.querySelector(".principal").style.display= "none";
}