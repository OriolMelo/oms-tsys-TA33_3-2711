let corredores = ["Primero", "Segundo", "Tercero", "Cuarto", "Quinto", "Sexto", "Séptimo", "Octavo", "Noveno", "Décimo"];

const [ganador, segundo, ...resto] = corredores;

console.log(ganador);
console.log(segundo);
console.log(resto);