function mayores5(numeros){
    for(let i=0; i<numeros.length; i++){
        if(numeros[i]>5){
            console.log(numeros[i]);
        }
    }
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
mayores5(numeros);