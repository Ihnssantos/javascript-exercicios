const usuario = {
    nome: "Ana",
    idade: 28,
    cidade: "BH"
}

const { nome, cidade } = usuario;
console.log(nome);
console.log(cidade);

const cores = ["azul", "verde", "vermelho"];
const [cor1, cor2] = cores;
console.log(cor1);
console.log(cor2);

const novasCores = [...cores, "amarelo", "roxo"];
console.log(novasCores);
console.log(cores);

const usuarioAtualizado = { ...usuario, idade: 29};
console.log(usuarioAtualizado);
console.log(usuario);

function somar(...numeros) {
    return numeros.reduce((total, numero) => total + numero, 0);
}

console.log(somar(1, 2, 3));
console.log(somar(1, 2, 3, 4, 5));

function exibir({ nome, idade }) {
    console.log(`Nome: ${nome}, Idade: ${idade}`);
}

exibir(usuario);