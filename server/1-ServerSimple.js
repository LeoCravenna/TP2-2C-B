const http = require('http');

http.createServer((req, res) =>{ // Levanta el servidor
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h2>Hola mundo HTTP!!!</h2>');
    res.end(); // cuando hago esto, se transmite

}).listen(3000, '127.0.0.1', () =>{ 
    console.log("Servidor Web iniciado y escuchando el puerto 3000");
});