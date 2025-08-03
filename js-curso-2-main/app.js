let title = document.querySelector("h1");
title.innerHTML = "Hora del Desafio";

function buttonConsole(params) {
    console.log("El botón fue clicado");
}

function buttonPrompt(params) {
    let question = prompt("¿Escribe el nombre de una ciudad de Brasil");
    alert("Estuve en " + question + " y me acordé de ti.");
}

function btnAlert(params) {
    alert("Yo amo JS");
}

function btnSuma(params) {
    let num1 = parseInt(prompt("ingrese un numero para operar"));
    let num2 = parseInt(prompt("ingrese un segundo numero para operar"));
    let resultado = num1 + num2;
    alert(`El resultado de la suma de los numeros ${num1} + ${num2} es ${resultado}`);
}