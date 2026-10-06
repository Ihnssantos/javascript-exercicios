const usuario = {
    nome: "Igor",
    idade: 25
}

const tecnologias = ["JavaScript", "React", "Node"];


const { nome, idade } = usuario;

const [linguagem, frontend, backend] = tecnologias;

console.log(`${nome} tem ${idade} anos.`);
console.log(`Linguagem: ${linguagem}`);
console.log(`Frontend: ${frontend}`);
console.log(`Backend: ${backend}`);