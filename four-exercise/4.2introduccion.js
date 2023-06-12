////introduccion de Variables en html


//metodos  mas utilizados con cedenas de caracteres
// como obtener la longitud de un string
// srt.length


let str = "Hola soy un string"; /// su salida seria 18 caracteres
console.log(str.length);

///obtenr partes de acdenas de caracteres
//slice(), substring(),substr()

let slice_str = str.slice(0,11)
console.log(slice_str);

let substring_str = str.substring(1,8)
console.log(substring_str);

let substr_str = str.substr(5,9)
console.log(substr_str);

///remplazar parte del contenido de una cadena de texto

let cadena = "hola mi nombre es Oscar"
 
///al utilizar strong solo reemplaza la primera instancia
console.log(cadena);
console.log(cadena.replace('Oscar', 'miguel'))

let texto_largo = "Presiona la tecla Alt en tu teclado, y no la sueltes. 2) Sin dejar de presionar Alt, presiona en el teclado numérico el número 39, que es el número de la letra o símbolo  en el código ASCII."

console.log(texto_largo.replace('la', 'Pijos'));


//al utilizar la expresion regular/g (glbal), reemplaza todas las instancias
console.log(texto_largo.replace(/la/g, 'Pollos'));


