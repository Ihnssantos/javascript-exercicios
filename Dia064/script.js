const produto = {
    nome: "Notebook",
    preco: 3500,
    estoque: 5
}

console.log(`Produto: ${produto.nome} | Preço: ${produto.preco} | Estoque: ${produto.estoque}`);

if (produto.estoque > 0) {
    console.log("Produto disponível")
} else {
    console.log("Produto indisponível");
}