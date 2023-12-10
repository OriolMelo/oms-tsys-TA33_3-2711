function intercalar(array1, array2) {
    let resultado = new Array(array1.length*2);
    let pos = 0;

    for (let i = 0; i < array1.length; i++) {
        resultado[pos] = array1[i];
        pos++;
        resultado[pos] = array2[i];
        pos++;
    }

    array1 = [];
    array2 = [];

    console.log(resultado);
}

let arrayUno = [1, 2, 3];
let arrayDos = [4, 5, 6];

intercalar(arrayUno, arrayDos);