const pessoa = {
  nome: "João",
  idade: 30,
  profissao: "Engenheiro",

  apresentar: function() {
    console.log(`Oi, eu sou ${this.nome}!`)
  }
};

pessoa.apresentar();
console.log(pessoa.nome);
console.log(pessoa["idade"]);

pessoa.idade = 31;
pessoa.email = "joao@email.com";
delete pessoa.profissao;

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));

const produtos = [
    {nome: "Notebook", preco: 2500},
    {nome: "Smartphone", preco: 1500},
    {nome: "Tablet", preco: 800}
];

const nomeProdutos = produtos.map((produto) => produto.nome);
console.log(nomeProdutos);

const filtroPreco = produtos.filter((produto) => produto.preco > 1000);
console.log(filtroPreco);