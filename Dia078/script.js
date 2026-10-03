const precos = [100, 250, 80, 300, 120];

let acumulador = 0;

for (let i = 0; i < precos.length; i++) {
    acumulador += precos[i];
}

console.log(`Total: R$ ${acumulador}`);