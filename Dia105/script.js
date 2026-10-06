const buscarProduto = async () => {
  try {
    const resposta = await fetch("https://dummyjson.com/products/999999");

    if (!resposta.ok) {
      throw new Error(resposta.status);
    }

    const produto = await resposta.json();

    console.log(produto);
  } catch (erro) {
    console.log(erro.message);
  }
};

buscarProduto();
