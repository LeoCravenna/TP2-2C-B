// ES UN OBJETO ECS6+ NO ESTA SOPORTADO EN LOS NAVEGADORES ANTIGUOS COMO IE
// SIRVE PARA MANIPULAR EL EXITO O EL FRACASO DE UNA OPERACIÓN, DE MANERA
// MÁS CLARA TALVEZ QUE CON SOLO CALLBACKS.

const { resolve } = require("path");
const { rejects } = require("assert");
const { Resolver } = require("dns");

/*const doWorkPromise = new Promise((resolve, rejects) => {
    setTimeout(() => {
        //resolve([2,3,4,6]);
        rejects('Algo malo pasó');
    }, 2 * 1000);
});

doWorkPromise
    .then(result => {
        console.log('Exito!', result);
    })
    .catch(error => {
        console.log('Error:', error);
    });*/

function resolverAlgo(){
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            resolve('Listo!');
        }, 2 * 1000);
    });
}  

// SIEMPRE QUE SE USE AWAIT, LA FUNCIÓN TIENE QUE SER ASYNC
async function asyncCall() {
    console.log('Llamando a promesa...');
    // AWAIT HACE QUE SE QUEDE EN ESA LÍNEA DE EJECUCIÓN HASTA QUE SE RESUELVA
    const resultado = await resolverAlgo();
    console.log(resultado);
}

asyncCall();