// Ejercicio 12 – Animación con DOM y CSS
// Autora: Aleyda Quispe

const botonMover = document.querySelector("#btnMover");
const botonReiniciar = document.querySelector("#btnReiniciar");
const cuadro = document.querySelector("#cuadro");

botonMover.addEventListener("click", function() {
    cuadro.classList.add("mover");
});

botonReiniciar.addEventListener("click", function() {
    cuadro.classList.remove("mover");
});
