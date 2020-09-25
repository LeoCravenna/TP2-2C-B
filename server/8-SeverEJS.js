const express = require('express');
const chalk = require('chalk');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use('/assets', express.static('./public')); // Entrega lo que esta en la carpeta public

app.get('/', (req, res) =>{
    res.render('index', {nombre: "Pablo Fernandez"});
});

app.listen(PORT, () => { console.log(chalk.bgGreenBright.yellow('Servidor Web Disponible')) });