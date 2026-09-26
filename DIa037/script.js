const produto = {
    nome: "Notebook",
    preco: 3500,
    estoque: 10
};

produto.preco = 3200;
produto.marca = "Lenovo";
delete produto.estoque;

console.log(produto);