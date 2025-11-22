// Ejercicio 19 – Modificar valor dentro de un JSON
// Autora: Aleyda Quispe

const jsonPersona = '{"nombre":"Luis","edad":25,"ciudad":"Cusco"}';
let persona = JSON.parse(jsonPersona);
persona.edad = 26;
const jsonActualizado = JSON.stringify(persona);

console.log("JSON actualizado:", jsonActualizado);