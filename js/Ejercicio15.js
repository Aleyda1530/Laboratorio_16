// Ejercicio 15 – Convertir cadena JSON a objeto JS
// Autora: Aleyda Quispe

const cadenaJSON = '{"nombre":"Lucía","edad":22,"curso":"IDWeb"}';
const objetoPersona = JSON.parse(cadenaJSON);
const parrafoResultado = document.querySelector("#resultado");

parrafoResultado.textContent = "Nombre: " + objetoPersona.nombre;