class Receta {
    
    constructor(nombre, tiempo, ingredientes) {
        this.nombre = nombre;
        this.tiempo = tiempo;
        this.ingredientes = ingredientes;
    }
};

let recetas = [
    new Receta(
        "Macarrones",
        "45 minutos",
        ["macarrones", "carne picada", "tomate", "sal", "pimienta"]
    ),
    new Receta(
        "Lentejas",
        "1h30min",
        ["lentejas", "calabacín", "patata", "ajo"]
    ),
    new Receta(
        "Macedonia",
        "5 minutos",
        ["manzana", "fresas", "plátano", "melocotón", "sandía", "melón"]    
    )
];

function mostrarReceta(receta) {
    console.log("Nombre: " + receta.nombre);
    console.log("Tiempo: " + receta.tiempo);
    console.log("Ingredientes:");
    for(let i=0; i<receta.ingredientes.length; i++){
        console.log(receta.ingredientes[i]);
    }
}

recetas.forEach(receta => {
    mostrarReceta(receta);
});