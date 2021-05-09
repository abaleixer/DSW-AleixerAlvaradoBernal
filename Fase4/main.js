

inicio(false);

function irPagina(paginaIr) {
    inicio(true);
    let pagina = document.getElementById(paginaIr);
    pagina.style.display = "block";

    darEstilos(paginaIr);
}

function inicio(estado) {
    let paginas = document.getElementById('app').children;
    for (let index = 0; index < paginas.length; index++) {
        const element = paginas[index];
        element.style.display = "none";
        if (document.getElementsByTagName("head")[0].children.length == 9) {
            document.getElementsByTagName("head")[0].children.item(8).remove();// getElementsByTagName("head")[0].removeChild();
        }
    }
    if (!estado) {
        document.getElementById('inicio').style.display = "block";
    }

}

function darEstilos(hoja) {
    if (hoja == "actividadUno") {
        var nuevaHoja = document.createElement('link');
        nuevaHoja.rel = 'stylesheet';
        nuevaHoja.integrity = "sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0";
        nuevaHoja.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css';// 'data:text/css,' + escape(styles);
        nuevaHoja.crossOrigin = "anonymous";
        document.getElementsByTagName("head")[0].appendChild(nuevaHoja);
    }
}


function enviarDocumento() {

    let Nombre = document.getElementById("Nombre").value;
    let preguntaUno = document.getElementById("preguntaUno").value;
    let preguntaDos = document.getElementsByName("flexRadioDefault");
    let preguntaTres = document.getElementsByName("flexRadioDefaultTres");
    if (Nombre.length > 0) {


        let preguntaDosR = 0;
        let preguntaTresR = 0;
        let puntos = 0;
        for (i = 0; i < preguntaDos.length; i++) {
            if (preguntaDos[i].checked) {
                preguntaDosR = preguntaDos[i].value;
                break;
            }
        }
        for (i = 0; i < preguntaTres.length; i++) {
            if (preguntaTres[i].checked) {
                preguntaTresR = preguntaTres[i].value;
                break;
            }
        }

        if (preguntaUno == 1) {
            puntos++;
        }
        if (preguntaDosR == 1) {
            puntos++;
        }
        if (preguntaTresR == 1) {
            puntos++;
        }


        alert("Los puntos por las preguntas para " + Nombre + " son " + puntos + " de 3 puntos");
    } else {
        alert("Por favor contestar el cuestionario");
    }
}