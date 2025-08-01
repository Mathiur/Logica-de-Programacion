Hemos llegado a otra lista de actividades (no obligatorias) para que practiques y refuerces aún más tu aprendizaje. ¿Vamos a hacerlo? Desafíos:

1Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.

```
let contador = 1;
while(contador >= 10){
    console.log(contador);
    contador++; 
}
```
2Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.

```
let contador = 10;
while(contador >= 0){
    console.log(contador);
    contador--;
}
```

3Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

```
let numero = prompt("ingrese un numero entero positivo");
while(numero >= 0){
    console.log(numero);
    numero--;
}
```

4Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

```
let numero = prompt("ingrese un numero entero positivo");
let contador = 0;
while(contador <= numero){
    console.log(contador);
    contador++;
}
```