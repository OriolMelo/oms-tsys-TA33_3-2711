let objetos = [
    {
        nombre: "Nombre",
        apellidos: "Apellido",
        edad: 20,
        dirección: "Calle",
        ciudad: "Ciudad",
        pais: "País"
    },
    {
        nombre: "Otro",
        apellidos: "Más",
        edad: 25,
        dirección: "Dirección",
        ciudad: "Sitio",
        pais: "Lugar"
    },
    {
        nombre: "Tercero",
        apellidos: "Ape",
        edad: 30,
        dirección: "Avenida",
        ciudad: "Pueblo",
        pais: "Reino"
    }
];

function mostrarNombre(objetos){
    objetos.forEach(persona => {
        console.log(persona.nombre);
    });
}

mostrarNombre(objetos);