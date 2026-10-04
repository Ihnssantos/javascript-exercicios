const funcionario = {
    nome: "Igor",
    cargo: "Desenvolvedor",
    salario: 4500,
    status: false
}

let funcionarioStatus;

if (funcionario.status === true) {
    funcionarioStatus = "Ativo";
} else {
    funcionarioStatus = "Inativo";
}


console.log(`Funcionário: ${funcionario.nome}`);
console.log(`Cargo: ${funcionario.cargo}`);
console.log(`Salário: R$ ${funcionario.salario}`);
console.log(`Status: ${funcionarioStatus}`);