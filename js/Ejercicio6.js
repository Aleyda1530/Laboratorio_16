// Ejercicio 6 – Contador interactivo que no permite valores negativos
// Autora: Aleyda Quispe

const botonIncrementar = document.querySelector("#btnIncrementar");
const botonDecrementar = document.querySelector("#btnDecrementar");
const spanContador = document.querySelector("#valorContador");
const mensajeError = document.querySelector("#mensaje");

let valorActual = 0;

botonIncrementar.addEventListener("click", function() {
    valorActual++;
    spanContador.textContent = valorActual;
    mensajeError.textContent = ""; // borramos error si existía
});

botonDecrementar.addEventListener("click", function() {
    if (valorActual > 0) {
        valorActual--;
        spanContador.textContent = valorActual;
        mensajeError.textContent = "";
    } else {
        mensajeError.textContent = "El contador no puede ser negativo.";
    }
});