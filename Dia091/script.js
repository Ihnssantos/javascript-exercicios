const valores = [100, 200, 300];

const resultado = valores.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
}, 0);

console.log(resultado);