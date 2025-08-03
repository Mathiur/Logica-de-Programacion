1. Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".

```javascript
let title = document.querySelector("h1");
title.innerHTML = "Hora del Desafio";
```

2. Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".

```javascript
function buttonConsole(params) {
    console.log("El botón fue clicado");
}
```

3. Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".

```javascript
function buttonPrompt(params) {
    let question = prompt("¿Escribe el nombre de una ciudad de Brasil");
    alert("Estuve en " + question + " y me acordé de ti.");
}
```

4. Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".

```javascript
function btnAlert(params) {
    alert("Yo amo JS");
}
```

5. Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.

```javascript
function btnSuma(params) {
    let num1 = parseInt(prompt("ingrese un numero para operar"));
    let num2 = parseInt(prompt("ingrese un segundo numero para operar"));
    let resultado = num1 + num2;
    alert(`El resultado de la suma de los numeros ${num1} + ${num2} es ${resultado}`);
}
```