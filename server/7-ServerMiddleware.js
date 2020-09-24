const express = require('express');
const chalk = require('chalk');
const moment = require('moment'); // Todo lo que tenga que ver con Fechas

const app = express();
const PORT = 3000;

//VERSION 1, VERSION 2, VERSION 3(si al css le pasas un ?token=abcde123) -------------------------
// Middleware
app.use('/', (req, res, next) =>{
    if(req.query.token == 'abcde123'){ // consulto el parametro del request
        next(); // lo dejo pasar, que continue con la siguiente instrucción
    }else{
        res.status(401).send('Login fail'); // lo freno, respondo desde acá, le mando un status y una salida
    }
});


/*app.use('/', (req, res, next) =>{
    console.log('Pasó por el Middleware');
    next();
});*/

//VERSION 3 --------------------------------------------------------------------
app.use('/assets', express.static('./public')); // Entrega lo que esta en la carpeta public

//VERSION 1 --------------------------------------------------------------------
/*app.get('/', (req, res) =>{
    console.log("Por acá pasó: app.get /");
    res.send(`Respuesta de servidor`);
});*/

//VERSION 3 --------------------------------------------------------------------
// Ejemplo para entregar el html/css
app.get('/', (req, res) =>{
    res.send(`
        <html>
            <head>
                <link href="assets/style.css?token=abcde123" type="text/css" rel="stylesheet"/>
            </head>
            <body>
                <h1>Hola Mundo !</h1>
            </body>
        </html>
    `);
});

//VERSION 2 --------------------------------------------------------------------
// Este app.get se puede usar como un Middleware para que pase al siguiente app.get
/*app.get('/', (req, res, next) =>{
    console.log("Por acá 1 pasó: app.get /");
    //res.send(`Respuesta de servidor`);
    next();
});

app.get('/', (req, res) =>{
    console.log("Por acá 2 pasó: app.get /");
    res.send(`Respuesta de servidor`);
});*/

app.listen(PORT, () => { console.log(chalk.bgGreenBright.yellow('Servidor Web Disponible')) });
