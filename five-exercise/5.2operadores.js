//Operador .valueOf()  - Para obtener valores numericos a partir de literales

let a = 2;
let b = new Number (3);

console.log(a);
console.log(b);
console.log(a+b);
console.log(a.valueOf() + b.valueOf());
console.log(b.valueOf());

let str = new String("hola soy un string");

console.log(str);
console.log(str.valueOf());


// NaN (not a  number) - Infinity =>(cuando dividimos entre un valor cero) - Null (nulo)

let n = Number("adios");
console.log(n);
console.log(isNaN());

let numerador = 19;
let divisor = 0;
 
console.log(numerador / divisor);

let divisor_2 = null;
console.log(numerador/divisor_2);


//Numeros hexadecimales en base 16 (1,2,3,4,5,6,7,8)

let numHex = '0x3a5b7';
console.log(parseInt(numHex));


//Como convertir los string a valores numericos con number, parseInt, parseFloat

let numero = '5.89';
let num2 = 17.2;

console.log(numero);
console.log(typeof numero);
      ///error de concepto por que no lo esta sumando, lo esta concatenando
   console.log(numero+num2);  
  console.log(typeof n);
      ///primero  le decimos que es un numero para luego poder sumar
   console.log(Number (numero) + num2);
   
//parseInt   y parseFloat

console.log(parseInt(numero));
console.log(parseFloat(numero));

let  num3 = 4;
 console.log(parseInt(num3));
 console.log(parseFloat(num3));

    //obtener los valores maximo y minimo en JS

    let min_presicion = Number.EPSILON;
    let min_valor_JS = Number.MIN_VALUE;
    let max_valor_js = Number.MAX_VALUE;

    console.log(min_presicion);
    console.log(min_valor_JS);
    console.log(max_valor_js);