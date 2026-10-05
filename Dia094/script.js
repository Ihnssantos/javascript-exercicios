const produtos = [
    {nome: "Notebook", preco: 3500, quantidade: 2},
    {nome: "Mouse", preco: 150, quantidade: 3},
    {nome: "Teclado", preco: 250, quantidade: 1}
]

const valorQuantidade = produtos.reduce((acumulador, produto) => {
    return acumulador + (produto.preco * produto.quantidade);
}, 0);

console.log(valorQuantidade);