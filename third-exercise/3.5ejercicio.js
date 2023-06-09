//Crea los siguientes archivos JS:
// factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for

/*
 for (let i = 0; i < 10; i++){
    console.log(i);
 }
*/
//factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while
/*
let i = 0;
let max = 10;
while (i < max){
    console.log(i);
    i++;
}
*/
//factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let numFactorial = 1
let i = 10
while (true) {
    numFactorial *= i
    i--
    if(i===1) break;
}
console.log(numFactorial);
