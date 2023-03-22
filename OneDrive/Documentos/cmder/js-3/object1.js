const pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar ", "squash ", "piano"]
}

//Agregar propiedades
pedro.estatura = 18
//Eliminar propiedades
delete pedro.activo
console.log(pedro)

console.log("Edad: " + pedro.edad);
console.log("Estatura: " + pedro.estatura);
console.log("Hobbies: " + pedro.hobbies);

function saluda(saludar) {
    console.log("Hola me llamo " + saludar)
}
saluda(pedro.nombre)

