const produtos = [
  { nome: "Mouse", preco: 80, estoque: 5 },
  { nome: "Teclado", preco: 150, estoque: 0 },
  { nome: "Monitor", preco: 900, estoque: 3 },
  { nome: "Notebook", preco: 3500, estoque: 0 },
];

const estoque = produtos.filter((produto) => produto.estoque > 0);

for (const produto of estoque) {
  const { nome, preco } = produto;

  console.log(`${nome} - R$ ${preco}`);
}
