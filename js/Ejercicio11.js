// Ejercicio 11 – Delegación de eventos para eliminar <li>
// Autora: Aleyda Quispe

const listaElementos = document.querySelector("#lista");
listaElementos.addEventListener("click", function(evento) {
    if (evento.target.tagName === "LI") {
        listaElementos.removeChild(evento.target);
    }
});
