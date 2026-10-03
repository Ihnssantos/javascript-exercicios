const nomeProduto = "Notebook";
const preco = 3500;
const desconto = 10;

const valorDesconto = preco * desconto / 100;
const precoFinal = preco - valorDesconto;

if (precoFinal < 3200) {
    console.log(`${nomeProduto} está em promoção!`);
    console.log(`Preço final: R$ ${precoFinal}`);
} else {
    console.log(`${nomeProduto} continua acima de R$ 3200.`);
    console.log(`Preço final: R$ ${precoFinal}`);
}