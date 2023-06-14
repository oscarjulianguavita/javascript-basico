
//- Una variable que contenga tu altura en centímetros (entero)
  let metros = '1.79';
  let convertir = metros * 100;

      console.log(convertir + "cm");

 //- Una variable que contenga tu altura en metros (número de coma flotante)

     console.log(parseFloat(metros)+' Mts');


//- Una variable que contenga tu peso en kilogramos (número de coma flotante)

     let peso = '80.5';
     console.log(parseFloat(peso)+' kg');

//- Una variable que contenga tu altura en metros redondeada hacia arriba

    console.log(convertir.toFixed());
    console.log(Math.round(metros));

//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo    

console.log(Math.floor(peso));

//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript



let max_valor_js = Number.MAX_VALUE;
let min_valor_JS = Number.MIN_VALUE;

console.log(max_valor_js + '1' );
console.log(min_valor_JS);
