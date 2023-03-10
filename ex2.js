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

for (let i = 0; i<alumns.length; i++){
    name = alumns[i];

    let approvedSubjects = 0;
    approvedSubjects = name.T1 ? approvedSubjects + 1: approvedSubjects;
    approvedSubjects = name.T2 ? approvedSubjects + 1: approvedSubjects;
    approvedSubjects = name.T3 ? approvedSubjects + 1: approvedSubjects;
    name.isApproved = approvedSubjects >= 2 ? true : false;

}

console.log(alumns);

//!Interacción 3

//?Usa un bucle forof para recorrer todos los destinos del array. Imprime en un clg sus valores. 

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar'];

for (const places of placesToTravel) {
    console.log(places);
}

//!Interacción 4

//?Usa forin para imprimir por consola los datos del alinígena. 

let alien = {
    name: 'Chispita',
    race: 'Pleyadianos',
    planet: 'Pléyades',
    weight: '100kg'
}

for (let dates in alien) {
    console.log('This alien is: ' + dates + alien[dates]);
}

//!Interacción 5

//?Usa un bulce for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en clg el array. 

const placesToTravel2 = [
    {id: 5, name: 'Japan'},
    {id: 11, name: 'Venecia'},
    {id: 23, name: 'Murcia'},
    {id: 40, name: 'Santander'},
    {id: 44, name: 'Filipinas'},
    {id: 59, name: 'Madagascar'}]

for (let i = 0; i < placesToTravel2.length; i++){
    const element = placesToTravel2[i];
    if (element.id === 11 || element.id === 40) {
        placesToTravel2.splice(i, 1);
    }
}

console.log(placesToTravel2);

//!Interacción 6

//?Usa un bucle for para recorrer todos los juguetes y elimina los que tengan la palabra gato. Puedo usar include.

const toys = [
{id: 5, name: 'Buzz MyYear'}, 
{id: 11, name: 'Action Woman'}, 
{id: 23, name: 'Barbie Man'}, 
{id: 40, name: 'El gato con Guantes'},
{id: 40, name: 'El gato felix'}
]

for (let i = 0; i < toys.length; i++){
    if (toys[i].name.includes('gato')) {
        toys.splice(i, 1)
        i--;
    }
}

console.log(toys);

//!Interacción 7. 

//?Usa un bucle forof para recorrer todos los juguetes y añade los que tengán mas de 15 ventas al arraypopularToys imprimiendo por clg. 

const popularToys = [];
const toys3 = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]

for (const toy2 of toys3){
    if (toy2.sellCount > 15){
    popularToys.push(toy2);
}
}

console.log(popularToys)
