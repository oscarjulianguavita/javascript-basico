//Casos especificos break, continue

let lista = [1,2,3,4,5,6,7,8,9];
for (let i = 0; i < lista.length;i++) {
    
    if (lista[i]=== 6){
        continue;
    }
    
    console.log(lista[i]);
    if (lista[i] > 6){
        break;
    }
}


