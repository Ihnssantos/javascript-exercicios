const nome = "Igor";
const idade = 29;
const salario = 3500;
const percentualAumento = 10;

const valorAumento = salario * percentualAumento / 100;
const novoSalario = salario + valorAumento;


let situacaoIdade = "";

if (idade >= 60) {
    situacaoIdade = "Idoso";
} else if (idade >= 18) {
    situacaoIdade = "Adulto";
} else {
    situacaoIdade = "Menor de idade"
};


console.log(`${nome} | Idade: ${idade} | ${situacaoIdade} | Salário anterior: R$ ${3500} | Novo salário: R$ ${novoSalario}`)
