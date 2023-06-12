//strings ó cadenas de caracteres
// strings estaticos
let str_dbl = "hola soy un texto con comillas dobles";
let str_sng = 'hola soy texto con comillas simples'

console.log(str_dbl);
console.log(str_sng);

let str_comillas_simples = 'asi hay que utilizar las comillas"asi tambien lo acepta"'
let str_comillas_dobles = "asi tambien se utiliza las comillas 'asi tambien'"

console.log(str_comillas_dobles);
console.log(str_comillas_simples);


////comillas invertidas (backticks)

let str_bacticks = 'esto es un bacticks'
console.log(str_bacticks);

let nombre = " Oscar"
let saludo = `hola, ${nombre}, wellcome` //// con comillas invertidas me permite introducir diferentes datos sin modificar otras lineas

console.log(saludo);

let apellido = " Guavita"
let primer_apellido = `hola, ${apellido}, wellcome`
console.log(primer_apellido);

////plantillas HTML

let plantilla =`
<html>
   <h1>Pagina web de ${nombre}</h1>
   <p>Este es unn parrafo</p>
</html>
`;
console.log(plantilla);


