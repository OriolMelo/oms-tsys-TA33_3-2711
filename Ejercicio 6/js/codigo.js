function dividir(numeros) {
    let pares = [];
    let impares = [];

    for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        pares.push(numeros[i]);
    } else {
        impares.push(numeros[i]);
    }
    }

    console.log(pares.concat(impares));
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

dividir(numeros);