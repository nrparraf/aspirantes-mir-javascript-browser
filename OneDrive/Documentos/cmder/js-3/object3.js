const receta = {

}

function comida (){
receta.nombre = "Sandwich";
receta.ingrediente = [];
receta.ingrediente.push({nombre:"Pan", cantidad:2});
receta.ingrediente.push({nombre:"Queso", cantidad:1});

}
comida();
console.log(receta.ingrediente[0])