//lista  ó array(arreglos), conjunto de variables puestas en orden
const lista = [1,"hola",true,undefined,null]
const lista2 = new Array(2,"hola",true,undefined,null);
const lista3 = new Array(3);
lista3[0] = "soy el primer elemento index 0"
const lista4 = [lista,lista2,lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);


//objetos son representaciones 

const movil = {
    altura:15,
    anchura: 25,
    marca: "apple",
    iswhite: false,
    contactos: ["orlando","mama","papa"],
    tarjeta:{
        marca: "sandwhich",
        almacenamiento: 32
    }
}

movil.anyo = 2023;
movil.marca = "sansung"

console.log(movil.marca);

// fechas existen librerias de apoyo ej: Moment.js. existen diferentes constructores (ahora,fecha_milis,fecha_cadena

const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10);
console.log(fecha_milis);

const fecha_cadena = new Date("januari 19 1983");
console.log(fecha_cadena);

const dia = ahora.getDate()
const mes = ahora.getMonth()
const anyo = ahora.getFullYear()

console.log(dia, mes,anyo);

