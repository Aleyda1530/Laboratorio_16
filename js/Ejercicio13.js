// Ejercicio 13 – CRUD de usuarios con DOM
// Autora: Aleyda Quispe
const formulario = document.querySelector("#formUsuario");
const inputNombre = document.querySelector("#nombre");
const inputEdad = document.querySelector("#edad");
const tablaUsuarios = document.querySelector("#tablaUsuarios");

let indiceEdicion = null;

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    const nombre = inputNombre.value.trim();
    const edad = inputEdad.value.trim();

    if (nombre === "" || edad === "") {
        alert("Completa ambos campos.");
        return;
    }
    if (indiceEdicion === null) {
        agregarFila(nombre, edad);
    } 
    else {
        actualizarFila(nombre, edad);
    }
    formulario.reset();
    indiceEdicion = null; 
});

function agregarFila(nombre, edad) {
    let fila = document.createElement("tr");
    let celdaNombre = document.createElement("td");
    celdaNombre.textContent = nombre;
    let celdaEdad = document.createElement("td");
    celdaEdad.textContent = edad;
    let celdaAcciones = document.createElement("td");
    let btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.dataset.accion = "editar";
    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.dataset.accion = "eliminar";

    celdaAcciones.appendChild(btnEditar);
    celdaAcciones.appendChild(btnEliminar);
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaEdad);
    fila.appendChild(celdaAcciones);
    tablaUsuarios.appendChild(fila);
}
function actualizarFila(nombre, edad) {
    let fila = tablaUsuarios.rows[indiceEdicion];
    fila.cells[0].textContent = nombre;
    fila.cells[1].textContent = edad;
}
tablaUsuarios.addEventListener("click", function(evento) {
    if (evento.target.tagName === "BUTTON") {
        const accion = evento.target.dataset.accion;
        const fila = evento.target.parentElement.parentElement;
        const indice = fila.rowIndex; 
        if (accion === "editar") {
            let nombre = fila.cells[0].textContent;
            let edad = fila.cells[1].textContent;

            inputNombre.value = nombre;
            inputEdad.value = edad;

            indiceEdicion = indice;
        }
        else if (accion === "eliminar") {
            tablaUsuarios.deleteRow(indice);
        }
    }
});