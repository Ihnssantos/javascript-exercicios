const buscarProdutos = async () => {

    const resposta = await fetch("https://dummyjson.com/products");

    const produtos = await resposta.json();

    const produtoFiltrado = produtos.products.find((produto) => produto.id === 5);

    console.log(`Titulo: ${produtoFiltrado.title}`);
    console.log(`Preço: ${produtoFiltrado.price}`);
}

buscarProdutos();