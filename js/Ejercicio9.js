// Ejercicio 9 – Galería con miniaturas
// Autora: Aleyda Quispe

const imagenPrincipal = document.querySelector("#imgPrincipal");
const miniaturas = document.querySelectorAll(".mini");

miniaturas.forEach(function(miniatura) {
    miniatura.addEventListener("click", function() {
        imagenPrincipal.src = miniatura.src;
    });
});