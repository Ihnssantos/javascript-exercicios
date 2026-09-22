function calcularDesconto(preco, desconto = 10) {
    let precoFinal = preco - (preco * desconto / 100);
    return precoFinal;
}

console.log(calcularDesconto(50, 5));

console.log(calcularDesconto(50));