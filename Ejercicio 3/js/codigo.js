let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
console.log(javascript1);
javascript1.splice(javascript1.indexOf("DOM"), 1, "Objetos");
console.log(javascript1);
javascript1.splice(javascript1.indexOf("Arrays"), 1, "ArraysDifíciles");
console.log(javascript1);
let javascriptCopia = javascript1.slice(-2);
console.log(javascriptCopia);
console.log("Índice de Funciones en el array original: "+javascript1.indexOf("Funciones"));
console.log("Índice de Funciones en el array copia: "+javascriptCopia.indexOf("Funciones"));