// Ejercicio 3 – Cambiar contenido dinámicamente
// Autora: Aleyda Quispe

let botonCambiar = document.querySelector("#botonCambiar");
let parrafo = document.querySelector("#texto");

botonCambiar.addEventListener("click", function() {
    parrafo.textContent = "Texto cambiado";
})