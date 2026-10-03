const produto = {
    nome: "Monitor",
    preco: 1200,
    quantidade: 3
}

const totalEstoque = (produto) => {
    return `Produto: ${produto.nome} \nValor total em estoque: R$ ${produto.preco * produto.quantidade}`;
}

console.log(totalEstoque(produto));