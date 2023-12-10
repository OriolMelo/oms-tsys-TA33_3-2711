let receta = {
    nombre: "Macarrones",
    tiempo: "45 minutos",
    ingredientes: ["macarrones", "carne picada", "tomate", "sal", "pimienta"]
};

function mostrarReceta(receta) {
    console.log("Nombre: " + receta.nombre);
    console.log("Tiempo: " + receta.tiempo);
    console.log("Ingredientes:");
    for(let i=0; i<receta.ingredientes.length; i++){
        console.log(receta.ingredientes[i]);
    }
}

mostrarReceta(receta);