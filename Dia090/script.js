const produtos = [
    {nome: "Notebook", preco: 3500},
    {nome: "Mouse", preco: 150},
    {nome: "Teclado", preco: 250},
    {nome: "Monitor", preco: 1200},
]

const produtoTeclado = produtos.find((produto) => produto.nome === "Teclado");

console.log(produtoTeclado);