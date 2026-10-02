const usuario = {
    nome: "Igor",
    idade: 25,
    endereco: {
        cidade: "Congonhas",
        estado: "MG"
    }
};

console.log(`${usuario.nome} tem ${usuario.idade} e mora em ${usuario.endereco.cidade} - ${usuario.endereco.estado}`);