<h1>Desafio 2 : Hora de Practicar</h1>

Saber cómo usar funciones es uno de los conceptos fundamentales en la programación y el desarrollo de software. Las funciones desempeñan un papel crucial en la organización, modularización y reutilización del código.

Con eso en mente, hemos creado una lista de actividades (opcionales) centradas en la práctica para mejorar aún más tu experiencia de aprendizaje. ¡Así que vamos a practicar!

1. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

```javascript
function nombrePersona(nombre){
 let name = "Mateo";
 console.log(`¡Hola, ${name}!`)
}
nombrePersona("Mateo");
```

2. Crear una función que muestre "¡Hola, mundo!" en la consola.

```javascript
function holaMundo(){
 console.log(`¡Hola Mundo!`)
}
holaMundo();
```

3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

```javascript
function holaMundo(){
 console.log(`¡Hola Mundo!`)
}
holaMundo();
```

4. Crear una función que reciba tres números como parámetros y devuelva su promedio.

```javascript
let numeros =  (num1, num2, num3) => {
    let num1 = 10, num2 = 45, num3 = 18;
    let promedio = (num1 + num2 + num3)/3
    return promedio;
}
```

5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

```javascript
//funcion flecha
let numbers = (n1, n2) =>{
    return n1 > n2 ? n1 : n2;//operador ternario si n1 es mayor que n2 entonces mostrar n1 si no mostrar n2
}
console.log(numbers(88,8))
```

6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

```javascript
// funcion flecha con el parametro a
let dobleNumero = a => a * a;
console.log(dobleNumero(5));
```