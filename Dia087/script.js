const produtos = [
    {nome: "Notebook", preco: 3500},
    {nome: "Mouse", preco: 150},
    {nome: "Teclado", preco: 250}
];

const frasesProduto = produtos.map((produto) => `Produto: ${produto.nome} - R$ ${produto.preco}`);

console.log(frasesProduto);