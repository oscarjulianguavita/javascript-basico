//Como se trabaja con listas (Arrays,arreglos o vectores)

let var2 = true
let var1 = 54
let array = [1,"hola",false,{id:4},null,undefined,var1,var2]

console.log(var1);
console.log(array);
console.log(var2);

//Acceder a los valores de un array a traves de su posicion

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);

//Métodos para introducir nuevos valores en  nuestros arrays
    //.push()  .unshift()    => Mutan el valor de nuestro Array
    //Valores al final -> Push
    array.push("final", 15,48775,'yuhu');//para introducir valores al final del array utilizamos .Push()
    console.log(array);


    //Para valores al principio utilizamos .Unshift()

    array.unshift('Inicio', 'hola cabrones')
    console.log(array);

    // Métodos par eliminar nuestros array: .pop() , .shift() , => Mutan el valor del array
    //Valores al final -> . Pop()  // van eliminando valores del array
    
    const array2 = [1,2,3,'hola', false]
    array2.pop()
    console.log(array2);
    array2.pop()
    console.log(array2);

    //Valores al pincipio .shift()

    array2.shift()
    console.log(array2);

    //Método para eliminar o modificar valores en  nuestro array
     //   .splice()

     const array3 = [1,2,3,4,5,6]
     array3.splice(3,1) //.splice():  muestra cuantos valores quieres al principio y con la , (coma), la posicion a eliminar en este caso elimina la posicion 4
     console.log(array3);

//Añadir valores con .splice()

array3.splice(2,2, 'hola', true)
console.log(array3);
//Modificar valores 
array3.splice(2,1,3)
console.log(array3);