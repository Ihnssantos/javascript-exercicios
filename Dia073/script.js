//VARIAVEIS E SAÍDA DE DADOS
const nome = "Igor";//constante, não pode alterar o valor armazenado
let idade = 25;//variavel, pode ser alterado o valor armazenado

console.log(`Meu nome é ${nome}, tenho ${idade} anos de idade!`);//saida de dados + template literal para exibir uma mensagem com os valores armazenados nas variaveis


//TIPOS DE DADOS BASICOS
let texto = "Olá mundo";//string
let numero = 2026;//number
let programador = true;//boolean
let vazio = null;//valor nullo


//OPERADORES
//aritmeticos
console.log(2 + 2);//soma
console.log(2 - 2);//subtração
console.log(2 * 2);//multiplicacao
console.log(2 / 2);//divisao
console.log(2 % 4);//resto da divisao

//atribuição
let valor = 0;

console.log(valor = 2);//atribui
console.log(valor += 2);//soma e atribui
console.log(valor -= 1);//subtrae e atribui
console.log(valor *= 5);//multiplica e atribui
console.log(valor /= 2);//divide e atribui

//comparação
let numero1 = 2;
let numero2 = 2;

console.log(numero1 == numero2);//compara somente o valor
console.log(numero1 === numero2);//compara o valor e o tipo de dado
console.log(numero1 > numero2);//maior
console.log(numero1 < numero2);//menor
console.log(numero1 >= numero2);//maior ou igual
console.log(numero1 <= numero2);//menor ou igual
console.log(numero1 !== numero2);//diferente

//logico
// && -> E
// || -> OU
// !valor -> inverte o valor logico

//Ternario
//condicao ? valorSeVerdadeiro : valorSeFalso;


//CONDICIONAIS
//if e else
if (idade >= 18) {
    console.log("Maior de idade!")
} else {
    console.log("Menor de idade!")
};


//switch
let cor = "verde";

switch (cor) {
    case "vermelho":
        console.log("vermelho");
        break;

    case "verde":
        console.log("verde");
        break;
}


//LACOS DE REPTICAO
//for
for (let i = 0; i <= 10; i++) {
    console.log(i);
};


//FUNCAO
let soma = (a, b) => a + b;

console.log(soma(2,3));


//array e metodos basicos
let frutas = ["uva", "maça", "laranja"];
//              0       1        2

frutas.pop();//remove o ultimo elemento
frutas.push("Goiaba");//adciona no final
console.log(frutas);//maca, goiaba
console.log(frutas[0]);//maca


//OBJETOS
let pessoa = {
    nome: "Igor",
    idade: 25,
    altura: 1.78
}

console.log(pessoa.nome);//Igor



 