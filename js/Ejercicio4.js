// Ejercicio 4 – Alternar contenido al hacer clic
// Autora: Aleyda Quispe

let botonAlternarTexto =  document.querySelector("#botonAlternar");
let parrafoMensaje = document.querySelector("#mensaje");

const textoOriginal = "Texto original";
const textoCambiado = "Texto cambiado";

botonAlternarTexto.addEventListener("click", function() {
    if (parrafoMensaje.textContent === textoOriginal) {
        parrafoMensaje.textContent = textoCambiado;
    } else {
        parrafoMensaje.textContent = textoOriginal;
    }
});