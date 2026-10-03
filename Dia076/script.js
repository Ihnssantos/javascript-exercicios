const notas = [7, 4, 8, 5, 9];

let aprovadas = 0;
let reprovadas = 0;

for(let i = 0; i < notas.length; i++) {
    if (notas[i] >= 6) {
        aprovadas++;
    } else {
        reprovadas++;
    }
};

console.log(`Aprovadas: ${aprovadas}`);
console.log(`Reprovadas: ${reprovadas}`);