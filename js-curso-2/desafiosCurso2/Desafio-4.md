Saber cómo usar las funciones es uno de los conceptos fundamentales en la programación y el desarrollo de software. Las funciones desempeñan un papel crucial en la organización, modularización y reutilización del código.

Con eso en mente, hemos creado una lista de desafíos (no obligatorios) centrados en la práctica para mejorar aún más tu experiencia de aprendizaje. ¡Vamos a practicar entonces!

## Desafíos

1. Crea una lista vacía llamada "listaGenerica".

```javascript
let listaGenerica = [];
```

2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

```javascript
let lenguajesDeProgramacion = ["javascript", "C", "C++", "Kotlin", "Python"];
```

3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

```javascript
lenguajesDeProgramacion.push("Java", "Ruby", "GoLang");
```

4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

```javascript
function muestraArray(params) {
  console.log(lenguajesDeProgramacion);
}
muestraArray();
```

5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

```javascript
function muestraArrayInverso(params) {
  console.log(lenguajesDeProgramacion.reverse());
}
muestraArrayInverso();
```

6. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

```javascript
let numeros = [5, 7, 4, 8, 9, 12, 10, 1, 6];
function NumeroMayorMenor(params) {
  console.log(Math.max(...numeros)); //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax#sintaxis
  console.log(Math.min(...numeros)); // Sintaxix extendida o spread "..." elemento iterable ser expandido
}
NumeroMayorMenor();
```

7. Crea una función que devuelva la suma de todos los elementos en una lista.

```javascript
let numeros = [5, 7, 4, 8, 9, 12, 10, 1, 6];
let suma = 0;
function sumaNumeros(params) {
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
}
sumaNumeros();
console.log(suma);
```

8. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

```javascript

```

9. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

```javascript

```

10. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

```javascript

```
