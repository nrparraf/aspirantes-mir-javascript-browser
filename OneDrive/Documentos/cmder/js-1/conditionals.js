function calcuarColor(num) {
    let color;
    if (num === 1 ) {
        color = "negro";
    }else if (num === 2) {
        color = "blanco";
    }else if (num === 3) {
        color = "azul";
    } else {
        color= "No pertenece a un color";
    }
    return "El color es: " + color;
}

console.log(calcuarColor(1));
console.log(calcuarColor(2));
console.log(calcuarColor(3));
console.log(calcuarColor(8));