let listaAmigos = [];

function agregarAmigo() {
   //let nombreAmigo = document.getElementById("amigo").value;
    let nombreAmigo = prompt("cual es el nombre")
    console.log(nombreAmigo);
    if (nombreAmigo == "") {
        alert("Por favor, inserte un nombre");
        return agregarAmigo();
    } else {
        listaAmigos.push(nombreAmigo);
    }
}

agregarAmigo();