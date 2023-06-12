//Metodos de cadena parte tres.
//utilizar .   http://regexr.com    Para aprender mas acerca de expresiones regulares


let texto_largo = "Sabías que Simbad el marino es uno de los cuentos que forman parte de Las mil y una noches? Aunque fue añadido a la famosa recopilación de cuentos recién entre los siglos XVII y XVIII, es todo un clásico que ha sido llevado al cine en muchas ocasiones, y también a la televisión en formato serie, ¡es probable que hayas visto alguna!"


console.log(texto_largo.match(/no/g));

//Existe la palabra dentro del texto?
console.log(texto_largo.includes("prefiere"));
console.log(texto_largo.includes("visto"));

//Saber si un texto empieza con una palabra

console.log(texto_largo.startsWith("S"));

//Saber ssi un texto termina
 console.log(texto_largo.endsWith("alguna!"));