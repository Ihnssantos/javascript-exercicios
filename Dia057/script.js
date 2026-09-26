const usuario = {
    nome: "Igor",
    apelido: null,
    idade: 17
};


const nome = usuario.nome ?? "Nome não informado";
const apelido = usuario.apelido ?? "Sem apelido";
const cidade = usuario.cidade ?? "Cidade não informada";

console.log(nome);
console.log(apelido);
console.log(cidade);