const buscarUsuarios = async () => {

    const resposta = await fetch("https://jsonplaceholder.typicode.com/users");

    const usuarios = await resposta.json();

    const nomeUsuarios = usuarios.map((usuario) => `Nome: ${usuario.name}`);

    console.log(nomeUsuarios);
};

buscarUsuarios();