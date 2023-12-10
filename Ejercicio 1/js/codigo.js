function longitud(letras) {
    console.log(letras.length);
}

function elemento(letras) {
    console.log(letras[Math.floor(Math.random() * letras.length)]);
}

let letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

longitud(letras);
elemento(letras);