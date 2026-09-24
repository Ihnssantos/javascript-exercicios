const notas = [4, 6, 8, 3, 9, 7];

const notaEncontrada = notas.find((nota) => nota >= 7);
const naoEncontrada = notas.find((nota) => nota >= 10);

console.log(notaEncontrada);
console.log(naoEncontrada);