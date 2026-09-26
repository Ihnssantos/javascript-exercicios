const produtos = [
    { nome: "Notebook", preco: 3500 },
    { nome: "Mouse", preco: 150 },
    { nome: "Monitor", preco: 1200 },
    { nome: "Teclado", preco: 300 },
    { nome: "Celular", preco: 2500 }
];

const produtosCaro = produtos.filter((produto) => produto.preco > 1000);
const produtoEcontrado = produtos.find((produto) => produto.nome === "Teclado");

console.log(produtosCaro);
console.log(produtoEcontrado);