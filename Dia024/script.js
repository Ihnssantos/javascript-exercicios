const carros = ["Civic", "Corolla", "Golf"];

carros.unshift("Mustang");

console.log(carros);

let removido = carros.shift();

console.log(removido);
console.log(carros);