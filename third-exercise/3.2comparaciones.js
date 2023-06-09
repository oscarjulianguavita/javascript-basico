//Comparaciones: igualdad == ó ===
if (5==5){
    console.log("5 es igual a 5");
}
if (5===5){
    console.log("5 es muy igual a 5");
}


//== solo compara el valor
//=== comparar el valor y el tipo

let a = 8;
let b = "5";

if (a == b){
    console.log("a es igual a b - debil");
}
if (a === b){
    console.log("a es iguaa a b - fuerte");
}

//desigualdades

let c = 4;
let d = 10;

if (c != d){
    console.log("C es diferente de d - debil");
}
if (c !== d){
    console.log("C es diferente de d - fuerte");
}

//comparaciones mayor q y menor q
let max = 10;
let min = 5;

if (max > min){
    console.log("max es mayor que min");
}
if (max >= 10){
    console.log("max es mayor o igual  que min");
}
if (min < max){
    console.log("min es menor que max");
}
if (min <= max){
    console.log("min es menor o igual que max");
}
