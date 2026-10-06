const buscarUsuario = async () => {

    resposta = await fetch("https://jsonplaceholder.typicode.com/users")

    console.log(resposta);
};

buscarUsuario();