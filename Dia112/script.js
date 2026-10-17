const funcionario = {
  nome: "Carlos",
  salario: 3000,
  aumento: 10,
};

const calculaSalario = (funcionario) => {
  const { nome, salario, aumento } = funcionario;

  const novoSalario = salario + (salario * aumento) / 100;

  return `${nome} - Novo salário: R$ ${novoSalario}`;
};

console.log(calculaSalario(funcionario));
