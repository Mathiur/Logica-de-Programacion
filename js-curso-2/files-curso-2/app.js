let numeroSecreto = generarNumeroSecreto();
let intentos = 0;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(params) {
    let numeroUsuario = parseInt(document.getElementById("valorDeUsuario").value);
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el numero secreto en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
        document.querySelector("#reiniciar").removeAttribute("disabled");
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El numero es menor");
        } else {
            asignarTextoElemento("p", "El numero es mayor");
        }
        intentos++;
        cleanBox()
    }
    return;
}
function cleanBox(params) {
    document.getElementById("valorDeUsuario").value = "";
}

function generarNumeroSecreto(params) {
    return parseInt(Math.random() * 10 + 1);
}

function initialElements() {
    asignarTextoElemento("h1", "Juego del numero secreto!!");
    asignarTextoElemento("p", "Indica un numero entre 1 y 10");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function restartGame(params) {
    cleanBox();
    initialElements();
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

initialElements();