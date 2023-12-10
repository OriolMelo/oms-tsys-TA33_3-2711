let persona = {
    nombre: "Nombre",
    apellidos: "Apellido",
    edad: 20,
    dirección: "Calle",
    ciudad: "Ciudad",
    país: "País"
};

function nombreApellidos(persona) {
    return persona.nombre +" "+ persona.apellidos;
}

console.log(nombreApellidos(persona));