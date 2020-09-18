// Lea un archivo HTML
// haga response con el contenido
// que me permita reemplazar parte del contenido del html

const fs = require('fs');
const http = require('http');
const chalk = require('chalk');
const PORT = 3000;

http.createServer((req, res) =>{ // Levanta el servidor
    res.writeHead(200, {'Content-Type': 'text/html'}); // Defino el Html
    let html = fs.readFileSync('./index.html','utf-8');
    html = html.replace('{mensaje}','Hola mundo del templete');

    res.end(html); // cuando hago esto, se transmite

}).listen(PORT, '127.0.0.1', () =>{
    console.log(chalk.blue.bgGreenBright( `Servidor Web iniciado y escuchando el puerto ${PORT}`));
});

/*http.createServer((req, res) =>{ // Levanta el servidor
    try {
        let html = fs.readFileSync('./index.html','utf-8');
        res.writeHead(200, {'Content-Type': 'text/html'}); // Defino el Html
        html = html.replace('{mensaje}','Hola mundo del templete');
        res.write(html);
    } catch (error) {
        res.writeHead(500,{'Content-Type': 'text/html'});
        res.write('Error interno');
    }

    res.end(html); // cuando hago esto, se transmite

}).listen(PORT, '127.0.0.1', () =>{
    console.log(chalk.blue.bgGreenBright( `Servidor Web iniciado y escuchando el puerto ${PORT}`));
});*/