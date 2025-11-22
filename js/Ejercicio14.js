// Ejercicio 14 – Convertir objeto a JSON
// Autora: Aleyda Quispe

const persona = {
    nombre: "Aleyda",
    edad: 20,
    ciudad: "Arequipa"
};
const personaJSON = JSON.stringify(persona);
console.log(personaJSON);