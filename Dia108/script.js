const buscarUsuario = async () => {
  const usuarios = await fetch("https://dummyjson.com/users");

  const tratarJson = await usuarios.json();

  const usuario = tratarJson.users.find((usuario) => usuario.id === 5);

  const { firstName, lastName, age } = usuario;

  console.log(`Nome: ${firstName}`);
  console.log(`Sobrenome: ${lastName}`);
  console.log(`Idade: ${age}`);
};

buscarUsuario();
