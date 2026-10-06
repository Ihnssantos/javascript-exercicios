const buscarUsuario = async () => {

    const resposta = await fetch("https://jsonplaceholder.typicode.com/users")

    const usuarios = await resposta.json()

    console.log(usuarios)
};

buscarUsuario();