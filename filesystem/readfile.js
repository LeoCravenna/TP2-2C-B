//CON ESTO IMPORTO TODO LO QUE ES FILE SYSTEM EN LA VARIABLE 'FS'
const fs = require('fs');

const path = './texto.txt';

//ACA ESTA LEYENDO UN ARCHIVO
let datos = fs.readFileSync(path, 'utf-8');

console.log(datos);

datos += 'quiero una pizza';

const path2 = './texto2.txt';

//ACA ESTA CREANDO 'texto2.txt' PORQUE ES DIFERENTE A 'texto.txt',
//SI TUVIERA EL MISMO NOMBRE QUE EL ANTERIOR, LO SOBREESCRIBE
fs.writeFileSync(path2, datos);
console.log('OK');