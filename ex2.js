//!Interacción 1

//? Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta", usando includes.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de Gansta', 'Camiseta de Basket', 'Cinturón de Orión', 'AC/DC Camiseta'];

function showProducts(){
    for (let i = 0; i < products.length; i++){
        if (products[i].includes('Camiseta')){
            console.log(products[i])
        }
    }
}

showProducts(products);

//! Interacción 2

//? Comprobar los usuarios que tienen dos trimestres aprobados y añadimos la propiedad isApproved o true o false en consecuencia. Comprobar con console.log.

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true},
    {name: 'Lucía Aranda', T1: true, T2: false, T3: true},
    {name: 'Juan Miranda', T1: false, T2: true, T3: true},
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
    {name: 'Raquel Benito', T1: true, T2: true, T3: true},
]
