// Ejercicio 16 – Convertir arreglo de objetos a JSON y volver a objeto
// Autora: Aleyda Quispe

const productos = [
    { nombre: "Teclado", precio: 120 },
    { nombre: "Monitor", precio: 900 },
    { nombre: "USB", precio: 35 }
];
const productosJSON = JSON.stringify(productos);
const productosObjeto = JSON.parse(productosJSON);
const listaProductos = document.querySelector("#lista");

productosObjeto.forEach(function(producto) {
    let item = document.createElement("li");
    item.textContent = producto.nombre;
    listaProductos.appendChild(item);
});