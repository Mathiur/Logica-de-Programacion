let numeroMaximo = 10;
let intentos = 0;
let numerosSorteados = [];
let numeroSecreto = 0;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(params) {
    let numeroUsuario = parseInt(document.getElementById("valorDeUsuario").value);
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el numero secreto en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
        if (numerosSorteados.length == numeroMaximo) {//code new
            asignarTextoElemento(".texto_ultimoNumero", "Todos los numeros posibles ya estan sortados")
        }
        document.querySelector("#reiniciar").removeAttribute("disabled");
        document.getElementById("intento").setAttribute("disabled", "true")

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
    let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
    if (numerosSorteados.length == numeroMaximo) {
        return;
        // document.querySelector("#intento").setAttribute("disabled", "true")
        // document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        console.log(numeroSecreto);
        if (numerosSorteados.includes(numeroSecreto)) {
            return generarNumeroSecreto();
        } else {
            numerosSorteados.push(numeroSecreto);
            return numeroSecreto;
        }
    }
}
function initialElements() {
    asignarTextoElemento("h1", "Juego del numero secreto!!");
    asignarTextoElemento("p", `Indica un numero entre 1 y ${numeroMaximo}`);
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
    document.getElementById("intento").removeAttribute("disabled");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function restartGame(params) {
    cleanBox();
    asignarTextoElemento(".texto_ultimoNumero", "")
    if (numerosSorteados.length === numeroMaximo) {
        numerosSorteados = [];
    }
    numeroSecreto = 0;
    /* if (numerosSorteados.length == numeroMaximo) {
        numerosSorteados = [];
        
    } */
    initialElements();


}

initialElements();