function bmi(peso, altura) {
    let imc = 0;
    imc = peso / Math.pow(altura,2)
    return "El IMC es: " + imc
}
console.log(bmi(65, 1.8));
console.log(bmi(72, 1.6));
console.log(bmi(52, 1.75));