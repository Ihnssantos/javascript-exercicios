const produtos = [
    {nome: "Notebook", preco: 3500, estoque: 2},
    {nome: "Mouse", preco: 150, estoque: 0},
    {nome: "Teclado", preco: 250, estoque: 5},
    {nome: "Monitor", preco: 1200, estoque: 3}
]


const nomesProduto = produtos.map((produto) => produto.nome);
const contemEstoque = produtos.filter((produto) => produto.estoque > 0);
const produtoTeclado = produtos.find((produto) => produto.nome === "Teclado");
const valorEstoque = produtos.reduce((acumulador, produto) => {
    return acumulador + (produto.preco * produto.estoque);
}, 0);

console.log(nomesProduto);
console.log(contemEstoque);
console.log(produtoTeclado);
console.log(valorEstoque);