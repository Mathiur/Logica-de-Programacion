<h1>Desafio 2 : Hora de Practicar</h1>
Programar requiere práctica. Hemos creado una lista adicional de actividades (no obligatorias) para que practiques y refuerces aún más tu aprendizaje.

¿Listo para practicar?

Desafíos:

1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".

```javascript
let usuario = prompt("¿Que dia de la semana es?");
usuario = usuario.toLowerCase();
if(usuario == "sabado" || usuario == "domingo"){alert("¡Buen fin de semana!");}
else{alert("¡Buena semana!");}
```

2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

```javascript
let numero = prompt("ingrese un numero entero positivo o negativo");
if(numero > 0 ){alert("El numero es positivo");}
else if (numero < 0 ){alert("El numero es neagtivo")}
else{alert("el numero es cero");}
```

3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".

```javascript
let puntuacion = 120;
if(puntuacion >= 100){alert("¡Felicidades, has ganado!");}
else{alert("Intentalo nuevamente para ganar.");}
```

4. Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.

```javascript
let saldo = 450;
alert(`tu saldo es ${saldo}`);
```

5. Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.

```javascript
let nombre = prompt("¿Cual es su nombre?");
alert(`el nombre del usuario es ${nombre}`);
```
