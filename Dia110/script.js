const calcularTotalProdutos = async () => {
  const produtos = await fetch("https://dummyjson.com/products");

  const converte = await produtos.json();

  const filtroPreco = converte.products.filter(
    (produtos) => produtos.price > 100,
  );

  const soma = filtroPreco.reduce((acum, total) => acum + total.price, 0);

  console.log(`Total: ${soma.toFixed(2)}`);
};

calcularTotalProdutos();
