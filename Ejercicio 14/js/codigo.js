let recetas = [
    {
    nombre: "Macarrones",
    tiempo: "45 minutos",
    ingredientes: ["macarrones", "carne picada", "tomate", "sal", "pimienta"]
    },
    {
    nombre: "Lentejas",
    tiempo: "1h30min",
    ingredientes: ["lentejas", "calabacín", "patata", "ajo"]
    },
    {
    nombre: "Macedonia",
    tiempo: "5 minutos",
    ingredientes: ["manzana", "fresas", "plátano", "melocotón", "sandía", "melón"]    
    }
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