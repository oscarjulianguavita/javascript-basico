
//concatenacion y listas de propagacion
//Como unir dos listas   .concat(lista2)

const lista1 = ['hola',2,false,null]
const lista2 =  ['adios',3,4,7,8,9, true,undefined]

console.log(lista1);
console.log(lista2);

const lista3 = lista1.concat(lista2);
console.log(lista3);

//otra forma , mas utilizada, con el factor de propagacion

console.log(...lista3);

const lista4 = [...lista1,...lista2]
console.log(lista4);

//error y ojo a poner los ... seguidos si no puede aparecer así

const lista5 = [lista1,lista2]
console.log(lista5);


// Como obtener una lista a partir de otra   .slice()
////el metodo slice no modifica el valor del array original
const array = ['hola',1,2,3,4,null,false,'adios']
console.log(array.slice(0,2));

const array2 = array.slice(2,5)
console.log(array2);

const array3 = array.slice(2,-2)
console.log(array3);