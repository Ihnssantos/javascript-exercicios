const usuarios = [
    { nome: "Igor", idade: 25 },
    { nome: "Ana", idade: 30 },
    { nome: "Carlos", idade: 20 },
    { nome: "Julia", idade: 27 }
];

const nomes = usuarios.map((usuario) => usuario.nome);
const idades = usuarios.map((usuario) => usuario.idade);

console.log(nomes);
console.log(idades);