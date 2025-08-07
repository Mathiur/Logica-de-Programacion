<h1>Desafio 3 : Hora de Practicar</h1>

Desafíos: Saber cómo usar funciones es uno de los conceptos fundamentales en la programación y el desarrollo de software. Las funciones desempeñan un papel crucial en la organización, modularización y reutilización del código.

Con eso en mente, hemos creado una lista de actividades (opcionales) centradas en la práctica para mejorar aún más tu experiencia de aprendizaje. ¡Así que vamos a practicar!

1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

```javascript
//funcion flecha
let persona = (altura, peso) => {
  return peso / (altura * altura);
};
console.log(persona(1.68, 68));
```

2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.

```javascript
function factoriaal(num) {
  let resultado = 1;
  for (let i = num; i >= 1; i--) {
    resultado *= i;
    let por = i == 1 ? "=" : "*";
    document.writeln(`${i} ${por}  `);
  }
  return resultado;
}
document.writeln(factoriaal(5));
```

3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

```javascript
//funcion flecha
let conversionMoneda = (valor) => {
  let tasaCambio = 4.07;
  return valor * tasaCambio;
};
document.writeln(conversionMoneda(150));
```

4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

```javascript
let escalaFigura = (altura, base) => {
  let perimetro = 2 * base + 2 * altura;
  let area = base * altura;
  return {
    //esto es un objeto para poder retornar los dos valores nombre:valor
    perimetro: perimetro,
    area: area,
  };
};
let resultado = escalaFigura(3, 5);
document.writeln(`El perimetro es ${resultado.perimetro}`); //llamados la variable y el nombre de el valor en el objeto
document.writeln(`El area es ${resultado.area}`);
```

5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

```javascript
let circulo = (radio) => {
  let perimetro = 2 * Math.PI * radio;
  let area = Math.PI * radio ** 2;
  return {
    //esto es un objeto para poder retornar los dos valores nombre:valor
    perimetro: perimetro,
    area: area,
  };
};
let resultado1 = circulo(5);
document.writeln(`El perimetro es ${resultado1.perimetro}`); //llamados la variable y el nombre de el valor en el objeto
document.writeln(`El area es ${resultado1.area}`);
```

6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

```javascript
function tablaMultiplicar(numero) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    document.writeln(`${numero}x ${i} = ${resultado}`);
  }
}
tablaMultiplicar(5);
```
