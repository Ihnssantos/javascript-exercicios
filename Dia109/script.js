const carrinhoCompra = [
  { produto: "Mouse", preco: 80, quantidade: 2 },
  { produto: "Teclado", preco: 150, quantidade: 1 },
  { produto: "Monitor", preco: 900, quantidade: 2 },
];

const calcularTotal = (carrinho) => {
  const total = carrinho.reduce(
    (acc, carrinho) => acc + carrinho.preco * carrinho.quantidade,
    0,
  );

  return total;
};

console.log(`Resultado esperado: R$ ${calcularTotal(carrinhoCompra)}`);
