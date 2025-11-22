// Ejercicio 21 – Guardar datos de un formulario como JSON en localStorage
// Autora: Aleyda Quispe

const campoNombre = document.querySelector("#nombre");
const campoEdad = document.querySelector("#edad");
const botonGuardar = document.querySelector("#btnGuardar");
const mensaje = document.querySelector("#mensaje");

botonGuardar.addEventListener("click", function() {
    const datosUsuario = {
        nombre: campoNombre.value,
        edad: campoEdad.value
    };
    const datosJSON = JSON.stringify(datosUsuario);
    localStorage.setItem("usuarioFormulario", datosJSON);
    mensaje.textContent = "Datos guardados correctamente.";
});