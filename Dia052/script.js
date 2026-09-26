const produto = {
    nome: "Notebook",
    preco: 3500,
    marca: "Lenovo",
    estoque: 8
};

const {nome} = produto;
const {preco} = produto;
const {marca} = produto;
const {estoque} = produto;

console.log(`${nome} | R$: ${preco} | ${marca} | Estoque: ${estoque}`)