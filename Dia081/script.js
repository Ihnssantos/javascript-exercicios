const usuario = {
    nome: "Igor",
    idade: 25,
    endereco: {
        cidade: "Congonhas",
        estado: "MG",
        cep: "36415-000"
    }
}

usuario.endereco.estado = "SP";
usuario.endereco.pais = "Brasil";

console.log(`Cidade: ${usuario.endereco.cidade}.`);
console.log(usuario);
