// Ejercicio 8 – Validar formulario con DOM
// Autora: Aleyda Quispe
const formulario = document.querySelector("#formDatos");
const inputNombre = document.querySelector("#nombre");
const inputCorreo = document.querySelector("#correo");
const contenedorErrores = document.querySelector("#errores");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    contenedorErrores.innerHTML = "";
    let hayError = false;

    if (inputNombre.value.trim() === "") {
        let errorNombre = document.createElement("span");
        errorNombre.textContent = "El nombre no puede estar vacío.";
        errorNombre.classList.add("error");
        contenedorErrores.appendChild(errorNombre);
        hayError = true;
    }
    if (inputCorreo.value.trim() === "") {
        let errorCorreo = document.createElement("span");
        errorCorreo.textContent = "El correo no puede estar vacío.";
        errorCorreo.classList.add("error");
        contenedorErrores.appendChild(errorCorreo);
        hayError = true;
    }
    if (!hayError) {
        alert("Formulario enviado correctamente.");
        formulario.reset();
    }
});
