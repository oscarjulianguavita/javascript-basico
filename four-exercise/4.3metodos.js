//metodos Strings 2, de cadena de texto

let input ="ESCOrpio"
let db =" escorpio"

// toLowercase(minusculas)    -    toUpperCase (mayusculas)

console.log(input.toLowerCase());
console.log(input.toUpperCase());
console.log(input.toLowerCase() === db. toLowerCase());
console.log(input.toUpperCase() === db.toUpperCase());


///Formas de concatenar dos cadenas de caracteres

let str_1 = "Hola soy la primera cadena"
let str_2 = "Y yo soy la segunda cadena"
 console.log(str_1.concat(" ", str_2));
 console.log(str_1 + " "+ str_2);
 console.log(`${str_1} ${str_2}`);

 /// Eliminar espacios al inicio y al final

 let str_3 = "   Hola soy   un string,  con espacios al final.    "
 console.log(str_3.length);

 /// trim()

 console.log(str_3.trim().length);
 console.log(str_3.trimStart().length);
 console.log(str_3.trimEnd().length);


 // Obtener el caracter de cierta posicion

 let str_4 = "Hola soy el caracter nuemro 4" 
 console.log(str_4.charAt(2));
 console.log(str_4[5]);

 //Obtener la posicion de una palabra dentro de una cadena de caracteres. si sale -1 es c q no ha encontrado el caracter

 let str_5 = "Nero is a big dog"
 console.log(str_5.indexOf("big"));   //indexOf devuelve la primera instancia
 console.log(str_5.charAt(5));
 console.log(str_5.lastIndexOf("dog"));  //lastIndex devuelve la ultima instancia
