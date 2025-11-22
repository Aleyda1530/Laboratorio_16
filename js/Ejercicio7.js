// Ejercicio 7 – Agregar y eliminar elementos de una lista
// Autora: Aleyda Quispe

const inputTexto = document.querySelector("#textoIngresado");
const botonAgregar = document.querySelector("#btnAgregar");
const botonEliminar = document.querySelector("#btnEliminar");
const lista = document.querySelector("#lista");

botonAgregar.addEventListener("click", function() {
    let textoIngresado = inputTexto.value.trim();

    if (textoIngresado !== "") {
        let nuevoItem = document.createElement("li");
        nuevoItem.textContent = textoIngresado;
        lista.appendChild(nuevoItem);
        inputTexto.value = "";
    }
});

botonEliminar.addEventListener("click", function() {
    let ultimoItem = lista.lastElementChild;
    if (ultimoItem) {
        lista.removeChild(ultimoItem);
    }
});