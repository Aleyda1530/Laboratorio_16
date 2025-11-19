// Ejercicio 5 – Activar/desactivar modo oscuro con classList
// Autora: Aleyda Quispe

let botonModoOscuro = document.querySelector("#botonModoOscuro");
let cuerpoDocumento = document.querySelector("body");

botonModoOscuro.addEventListener("click", function() {
    cuerpoDocumento.classList.toggle("oscuro");
});