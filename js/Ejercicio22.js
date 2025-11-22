// Ejercicio 22 – Leer JSON desde localStorage y mostrarlo
// Autora: Aleyda Quispe

const botonMostrar = document.querySelector("#btnMostrar");
const areaResultado = document.querySelector("#resultado");

botonMostrar.addEventListener("click", function() {
    const datosJSON = localStorage.getItem("usuarioFormulario");
    if (datosJSON) {
        const datosObjeto = JSON.parse(datosJSON);
        areaResultado.textContent =
            "Nombre: " + datosObjeto.nombre +
            " | Edad: " + datosObjeto.edad;

    } else {
        areaResultado.textContent = "No se encontraron datos en localStorage.";
    }
});
