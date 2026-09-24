const notas = [8, 7, 9, 6, 10];

const temNotaDez = notas.some((nota) => nota == 10);
const todasAprovadas = notas.every((nota) => nota >= 6);

console.log(temNotaDez);
console.log(todasAprovadas);