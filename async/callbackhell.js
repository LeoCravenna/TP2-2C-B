// REQUERIMIENTOS

// 1.- Leer el archivo inventors.json
// 2.- Insertar un inventor nuevo
// 3.- Escribir en el archivo inventors.json
// 4.- Leer el archivo y mostrarlo en consola
// de forma asincrona

const fs = require('fs');
const path = '.././filesystem/inventors.json';
// 1.- LEER ARCHIVO
fs.readFile(path,'utf-8',(error, data) => {
    if(!error){
        data = JSON.parse(data);
        // 2.-INSERTAR UN ARCHIVO INVENTOR
        data.inventors.push({
            first: "René",
            last: "Favarolo",
            year: 1923
        });
        // 3.-ESCRIBIR ARCHIVO
        fs.writeFile(path, JSON.stringify(data, null, ' '), error => {
            if(!error){
                // 4.-NUEVA LECTURA DE ARCHIVO
                fs.readFile(path,'utf-8',(error, data) => {
                    if(!error){
                        console.log(JSON.parse(data));
                    }    
                });        
            }
        });
    }
});