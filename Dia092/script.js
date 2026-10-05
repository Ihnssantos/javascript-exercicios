const valores = [50, 100, 150, 200];

const total = valores.reduce((acumulador, valorTotal) => {
    return acumulador + valorTotal;
}, 0);

console.log(total);