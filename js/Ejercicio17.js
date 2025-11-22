// Ejercicio 17 – Guardar y recuperar JSON en localStorage
// Autora: Aleyda Quispe

const botonGuardar = document.querySelector("#btnGuardar");
const botonMostrar = document.querySelector("#btnMostrar");
const parrafoResultado = document.querySelector("#resultado");

botonGuardar.addEventListener("click", function() {
    const usuario = {
        nombre: "Aleyda",
        correo: "aleydaluzq@gmail.com",
        rol: "estudiante"
    };
    const usuarioJSON = JSON.stringify(usuario);
    localStorage.setItem("usuarioDatos", usuarioJSON);
    parrafoResultado.textContent = "Datos guardados correctamente.";
});

botonMostrar.addEventListener("click", function() {
    const datosGuardados = localStorage.getItem("usuarioDatos");
    if (datosGuardados) {
        const usuarioObjeto = JSON.parse(datosGuardados);

        parrafoResultado.textContent = 
            "Nombre: " + usuarioObjeto.nombre +
            "| Correo: " + usuarioObjeto.correo +
            "| Rol: " + usuarioObjeto.rol;
    } else {
        parrafoResultado.textContent = "No hay datos guardados.";
    }
});