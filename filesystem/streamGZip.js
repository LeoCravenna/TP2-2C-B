const fs = require('fs');
const zlib = require('zlib');

//COMPRIMIR--------------
//let readable = fs.createReadStream('./bigfile.txt'); // lee el archivo
//let compress = fs.createWriteStream('./bigfile.gz'); // comprime el archivo y lo genera

//let gzip = zlib.createGzip();

//readable.pipe(gzip).pipe(compress); // mediante los pipe une operaciones


//DESCOMPRIMIR---------------
const readable = fs.createReadStream('./bigfile.gz');// lee el archivo
let unZip = zlib.createUnzip();
let descompress = fs.createWriteStream('./bigfile2.txt'); // descomprime el archivo

readable.pipe(unZip).pipe(descompress);