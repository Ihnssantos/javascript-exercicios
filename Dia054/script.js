const tecnologiasFront = ["HTML", "CSS", "JavaScript"];
const tecnologiasBack = ["Node.js", "SQL"];

const tecnologias = [...tecnologiasBack, ...tecnologiasFront];
console.log(tecnologias);




const usuario = {
    nome: "Igor",
    area: "Desenvolvimento"
};

const usuarioCompleto = {
    ...usuario,
    active: true
}

console.log(usuarioCompleto);