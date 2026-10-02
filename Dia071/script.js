const usuario = {
    nome: "Igor",
    tecnologias: ["JavaScript", "HTML", "CSS"]
};

const apresentarUsuario = (usuario) => {
    for (let i = 0; i < usuario.tecnologias.length; i++) {
        console.log(`${usuario.nome} estuda ${usuario.tecnologias[i]}`);
    }
}

apresentarUsuario(usuario);