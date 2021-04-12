

inicio(false);

function irPagina(paginaIr) {
    inicio(true);
   let pagina = document.getElementById(paginaIr);
   pagina.style.display = "block";
}

function inicio(estado) {
    let paginas = document.getElementById('app').children;    
    for (let index = 0; index < paginas.length; index++) {
        const element = paginas[index];
        element.style.display = "none";
        
    }    
    if (!estado) {
        document.getElementById('inicio').style.display = "block";    
    }
   
}