//function declaration
function somar(a,b) {
    return a + b;
}

console.log("Soma: " + somar(2,2));



//function expression
const subtrair = function(a, b) {
    return a - b;
}

console.log("Subtrair: " + subtrair(5,2));



//arrow function
const multiplicar = (a, b) => {
    return a * b;
}

console.log("Multiplicar: " + multiplicar(3,3));

