// VALIDACION DE FORMATO DE MAIL

const validator = require('validator');
const chalk = require('chalk');

console.log(validator.isEmail('leocravenna@gmail.com'));

console.log(chalk.blue.bgGreen("Hola mundo en color!!"));
console.log(chalk.redBright.bgGreen("Hola mundo en color!!"));
