const compra = [120, 80, 250, 50];

const totalCompra = compra.reduce((acumulador, valorTotal) => {
    return acumulador + valorTotal
}, 0);

console.log(`Total da compra: R$ ${totalCompra}`);