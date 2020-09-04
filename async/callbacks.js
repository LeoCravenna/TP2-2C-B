// CALLBACK - Es una funcion que es pasada de parametro a otra funcion

function saludo(callback){
    console.log('Hola');
    let data = {
        name: 'John'
    };

    callback(data);
};

saludo(function(param){
    console.log('La función callback fue invocada');
    console.log(param);
});

saludo(param =>{
    console.log('Otra función ', param);
});