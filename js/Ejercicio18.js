// Ejercicio 18 – Generar tabla desde un JSON de libros
// Autora: Aleyda Quispe

const jsonLibros = `[
    { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez" },
    { "titulo": "1984", "autor": "George Orwell" },
    { "titulo": "El Principito", "autor": "Antoine de Saint-Exupéry" }
]`;

const listaLibros = JSON.parse(jsonLibros);
const contenedor = document.querySelector("#contenedorTabla");
let tabla = document.createElement("table");
let filaEncabezado = document.createElement("tr");
let thTitulo = document.createElement("th");
let thAutor = document.createElement("th");

thTitulo.textContent = "Título";
thAutor.textContent = "Autor";
filaEncabezado.appendChild(thTitulo);
filaEncabezado.appendChild(thAutor);
tabla.appendChild(filaEncabezado);
listaLibros.forEach(function(libro) {
    let fila = document.createElement("tr");
    let celdaTitulo = document.createElement("td");
    celdaTitulo.textContent = libro.titulo;
    let celdaAutor = document.createElement("td");
    celdaAutor.textContent = libro.autor;
    fila.appendChild(celdaTitulo);
    fila.appendChild(celdaAutor);
    tabla.appendChild(fila);
});
contenedor.appendChild(tabla);