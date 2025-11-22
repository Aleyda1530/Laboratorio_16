// Ejercicio 10 – Tabla dinámica desde JavaScript
// Autora: Aleyda Quispe
const botonGenerar = document.querySelector("#btnGenerar");
const contenedorTabla = document.querySelector("#tablaContenedor");
const productos = [
    { nombre: "Laptop", precio: 3500 },
    { nombre: "Mouse", precio: 80 }
];
botonGenerar.addEventListener("click", function() {
    contenedorTabla.innerHTML = "";
    let tabla = document.createElement("table");
    let encabezado = document.createElement("tr");
    let thNombre = document.createElement("th");
    thNombre.textContent = "Nombre";
    let thPrecio = document.createElement("th");
    thPrecio.textContent = "Precio";
    encabezado.appendChild(thNombre);
    encabezado.appendChild(thPrecio);
    tabla.appendChild(encabezado);
    productos.forEach(function(producto) {
        let fila = document.createElement("tr");
        let celdaNombre = document.createElement("td");
        celdaNombre.textContent = producto.nombre;
        let celdaPrecio = document.createElement("td");
        celdaPrecio.textContent = producto.precio;

        fila.appendChild(celdaNombre);
        fila.appendChild(celdaPrecio);
        tabla.appendChild(fila);
    });
    contenedorTabla.appendChild(tabla);
});