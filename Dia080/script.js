const produto = {
    nome: "Notebook",
    preco: 3500,
    estoque: 5
}

produto.preco = 3200;
produto.categoria = "Eletrônicos";
produto.estoque = produto.estoque + 3;
delete produto.categoria;

console.log(produto);