// Ejercicio 20 – Leer archivo JSON con fetch()
// Autora: Aleyda Quispe

const lista = document.querySelector("#listaProductos");

fetch("data/productos.json")
    .then(function(respuesta) {
        return respuesta.json();
    })
    .then(function(productos) {
        productos.forEach(function(producto) {
            let item = document.createElement("li");
            item.textContent = producto.nombre + " - S/ " + producto.precio;
            lista.appendChild(item);
        });
    })
    .catch(function(error) {
        console.log("Error al cargar el JSON:", error);
    });