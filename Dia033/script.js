const valores = [50, 100, 25, 75];

const total = valores.reduce((acumulador, valor) => {
    return acumulador + valor;
}, 0);

console.log(total);