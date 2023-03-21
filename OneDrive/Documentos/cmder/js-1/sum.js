function suma(num){
    let result = 0;
    for(let i=1; i <= num; i++){
        result += i
    }  
    return " El resultado es: " + result;
}

console.log(suma(4));
console.log(suma(10));
console.log(suma(15));
