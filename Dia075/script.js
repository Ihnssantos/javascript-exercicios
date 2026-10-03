const verificarEstoque = (produto, quantidade) => {
    if (quantidade > 0 ) {
        return `${produto} disponível: ${quantidade} unidades`;
    } else {
        return `${produto} sem estoque`;
    }
};

console.log(verificarEstoque("Notebook", 5));
console.log(verificarEstoque("Mouse", 0));