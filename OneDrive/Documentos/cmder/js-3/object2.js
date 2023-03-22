const persona = {
    nombre: "Nestor",
    edad: 38,
    ciudad: "Bogotá",
    profesion: "Programador",
    
}

console.log(persona);

//Agregar funtion
function presentacion (persona){
    const mensaje = persona
    console.log(`${this.nombre} ${this.edad} ${this.ciudad}`)
}
presentacion(persona);

//Agregar hobbies
persona.hobbies = ["Leer ", "futbol ", "anime"]
console.log(persona.hobbies)

//Ciclo for
for (let llave in persona) {
    if (persona.hasOwnProperty(llave)) {
      console.log(persona[llave])
    }
  }
