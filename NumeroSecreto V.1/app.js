//Variables
let NumeroMaximo = 100
let numeroSecreto = Math.floor(Math.random()* NumeroMaximo + 1);
let numeroUsuario = 0;
let intentos = 1;
let maximoIntentos = 6;
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${NumeroMaximo} por favor:`));
    console.log(typeof(numeroUsuario));

    //Este código realiza
    //la comparación
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario} con ${intentos} ${intentos == 1 ?"intento" : "intentos"}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert("El numero es menor");
        } else {
            alert("El numero es mayor");
        }
        intentos++;
        if (intentos >maximoIntentos) {
            alert(`Llegaste al numero maximo de ${maximoIntentos} intentos permitidos`);
            break;
        }
        //La condición no se cumplió
        // alert('Lo siento, no acertaste el número');
    }
} 

