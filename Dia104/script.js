const buscarProdutos = async () => {

    try {

        const resposta = await fetch("https://dummyjson.com/products");

        const produtos = await resposta.json();
        
        const produtosFiltrados = produtos.products.find((produto) => produto.id === 500000);

        console.log(`Titulo: ${produtosFiltrados.title}`);
        console.log(`Preço: ${produtosFiltrados.price}`);

    } catch (error) {

        console.log("Erro ao buscar produtos");

    }

}

buscarProdutos();