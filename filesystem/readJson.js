const fs = require('fs');

const path = './inventors.json';

//ACA EL ARCHIVO ESTA EN UNA VARIABLE
let datos = fs.readFileSync(path,'utf-8');

//PARSEAR EL ARCHIVO JSON, CONVIERTE UNA CADENA DE JSON A OBJETOS
datos = JSON.parse(datos);

//A PARTIR DE AHORA EN VEZ DE UNA CADENA, TENGO OBJETOS
console.log(datos);
console.log(datos.inventors[0]);

//console.log(datos);

//Ejercicio
// Leer el archivo Inventors.json
// Agregar un inventor
// Escribir el archivo incluyendo el nuevo inventor

const inventor = {first: 'Juan', last: 'Perez', year: 1978};

datos.inventors.push(inventor);

//DE UN ARRAY DE OBJETOS DE JAVASCRIPT, LO PASA UN JSON VÁLIDO
datos = JSON.stringify(datos, null, " ");

//SE ESCRIBE EL ARCHIVO JSON
fs.writeFileSync(path, datos);