const produtos = [
    {nome: "Notebook", preco: 3500, estoque: 5},
    {nome: "Mouse", preco: 150, estoque: 0},
    {nome: "Teclado", preco: 250, estoque: 8}
];

const contemEstoque = produtos.filter((produto) => produto.estoque > 0);

console.log(contemEstoque);