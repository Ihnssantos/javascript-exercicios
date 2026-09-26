const produtos = [
    { nome: "Notebook", preco: 3500, estoque: 5 },
    { nome: "Mouse", preco: 150, estoque: 0 },
    { nome: "Monitor", preco: 1200, estoque: 8 },
    { nome: "Teclado", preco: 300, estoque: 3 },
    { nome: "Celular", preco: 2500, estoque: 0 }
];

const produtosDisponiveis = produtos.filter((produto) => produto.estoque > 0);
const nomesProdutos = produtos.map((produto) => produto.nome);
const produtoEncontrado = produtos.find((produto) => produto.nome === "Monitor");
const produtosCaros = produtos.filter((produto) => produto.preco > 1000);

const preco = produtos.map((produto) => produto.preco);
const valorTotal = preco.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);


console.log("Produtos disponiveis:");
console.log(produtosDisponiveis);

console.log("");

console.log("Nomes dos produtos:");
console.log(nomesProdutos);

console.log("");

console.log("Tem monitor?");
console.log(produtoEncontrado);

console.log("");

console.log("Quais os produtos mais caros?");
console.log(produtosCaros);

console.log("");

console.log("Valor total dos produtos:");
console.log(valorTotal);