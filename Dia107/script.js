const funcionarios = [
  { id: 1, nome: "Carlos", salario: 3000, ativo: true },
  { id: 2, nome: "Ana", salario: 4500, ativo: false },
  { id: 3, nome: "Pedro", salario: 5000, ativo: true },
];

const buscarFuncionario = (id) => {
  const funcionario = funcionarios.find((funcionario) => funcionario.id === id);

  if (!funcionario) {
    console.log("Funcionario não encontrado");
  } else {
    console.log(`Nome: ${funcionario.nome}`);
    console.log(`Salário: ${funcionario.salario}`);
    console.log(`Status: ${funcionario.ativo ? "Ativo" : "Inativo"}`);
  }
};

buscarFuncionario(2);
