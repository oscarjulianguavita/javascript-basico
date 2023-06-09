//Bucles: for, while, do while
//for los + utilizados se declaran asi:
//for (inicializacion;condicion;actualizacion){
//
//}

// esto es lo mismo pero escrito en tres formas diferentes
//  i = i + 1
//  i += 1             
//  i++


/*
for (let i = 0; i < 10; i++) {
console.log(i);
}
for (let i = 0; i < 10; i = i + 3) {
    console.log(i);
    }
  */  


    let lista = [1,4,6,7,9,4,7];
    for (let i = 0; i < lista.length; i++){
        console.log(lista [i] );
    }
    
/*
 //multiplicando por 2
    let lista1 = [1,4,6,7,9,4,7];
    for (let i = 0; i < lista1.length; i++){
        console.log(lista1 [i] * 2 );
    }

// for of 
for (let valor of lista){
    console.log(valor);
}

// for each

lista.forEach(valor => {
    console.log(valor);
})



//estructura for ...in

let persona = {
    nombre : "oscar",
    apellido : "guavita",
    edad : 34,
    isDeveloper : true
}

let prop = "edad";
console.log(persona[prop]);


for (let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}
*/
