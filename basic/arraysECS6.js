const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];

//IMPRIMIR ESTE ARRAY DE FORMA TABULAR
//Nombre              Apellido              Año nacimiento
//========================================================
//

function print(inventors){
    console.log(`Nombre      Apellido      Año`);
    console.log(`=============================`);

    //CALLBACK ES UN PARÁMETRO EN EL CUAL SE LE PASA UNA FUNCIÓN
    inventors.forEach(inventor => {
        console.log(`${inventor.first.padEnd(12,' ')}${inventor.last.padEnd(14,' ')}${inventor.year}`);
    });
}

print(inventors);
console.log(`=============================`);


//Ejercicio
//1.- Filtrar los inventores nacidos después del 1800
console.log();
console.log('Ejercicio 1.-');

//VERSION CORTA (RECOMENDADA)
print(inventors.filter(inventor => inventor.year > 1800));

//VERSION EXTENDIDA
/*print(inventors.filter(
    function(inventor){
        return inventor.year > 1800;
    }
));*/
console.log(`=============================`);


//Ejercicio 2
//2.- Convertir el apellido en mayúsculas
console.log();
console.log('Ejercicio 2.-');

print(inventors.map(inventor => {
    return{first: inventor.first, last: inventor.last.toUpperCase(),year: inventor.year}
}));
console.log(`=============================`);


//Ejercicio 3
//3.- Filtro anterior y el apellido en mayúsculas
console.log();
console.log('Ejercicio 3.-');

print(
    inventors
    .filter(inventor => inventor.year > 1800)
    .map(inventor => ({first: inventor.first, last: inventor.last.toUpperCase(),year: inventor.year}))
);
console.log(`=============================`);


//Ejercicio 4
//4.- Buscar el inventor de apellido kepler y retornar el objeto
console.log();
console.log('Ejercicio 4.-');

console.log(
    inventors.find(inventor => inventor.last === "Kepler")
);


//Ejercicio 5
//5.- Alguno de los inventores nació en 1867
console.log();
console.log('Ejercicio 5.-');

console.log(inventors.some(inventor => inventor.year === 1867));


//Ejercicio 6
//6.- Todos los inventores nacieron después de 1500?
console.log();
console.log('Ejercicio 6.-');

console.log(inventors.every(inventor => inventor.year > 1500));


//Ejercicio 7
//7.- Ordenar los inventores por año
console.log();
console.log('Ejercicio 7.-');

print(inventors.sort((a,b) => a.year - b.year)); // Esto hace lo mismo que el de abajo pero más corto

print(inventors.sort((a,b) => {
    if(a.year > b.year){ // Esto > ordena descendiente y < ordena ascendente 
        return -1;
    }else{
        return 1;
    }
}));

print(inventors.sort((a,b) => {
    if(a.last > b.last){ // Esto > ordena descendiente y < ordena ascendente 
        return -1;
    }else{
        return 1;
    }
}));