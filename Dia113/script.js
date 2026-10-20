const buscarUsuario = async () => {
  try {
    const dados = await fetch("https://jsonplaceholder.typicode.com/users");

    const trataDados = await dados.json();

    const nomes = trataDados.map((usuarios) => usuarios.name);

    console.log(nomes);
  } catch {
    console.log("Erro ao buscar usuários");
  }
};

buscarUsuario();
