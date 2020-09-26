let mySidenav = document.getElementById("mySidenav");
let principal = document.querySelector(".principal");
let body = document.getElementsByName("body");


// Define a largura da barra de navegação lateral para 200 px
function openNav() {
    mySidenav.style.width = "200px";
    principal.style.margin = "0 0 0 270px";
        
}

// Define a largura da barra de navegação lateral para 0 (fechar a barra de navegação)
function closeNav() {
    mySidenav.style.width = "0";
    principal.style.marginLeft = "100px";
}
