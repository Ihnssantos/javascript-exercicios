const numeros = [5, 12, 8, 20, 3, 15, 10];


const dobrados = numeros.map((numero) => numero * 2);
const maiorQueDez = numeros.filter((numero) => numero > 10);
const primeiroEncontrado = numeros.find((numero) => numero >= 15);
const existeMaiorQueDezoito = numeros.some((numero) => numero > 18);
const total = numeros.reduce((acumulador, numero) => acumulador + numero, 0);


console.log("Dobrados: " + dobrados);
console.log("Maior que 10: " + maiorQueDez);
console.log("Primeiro encontrado: " + primeiroEncontrado);
console.log("Algum maior que 18: " + existeMaiorQueDezoito);
console.log("Total: " + total);