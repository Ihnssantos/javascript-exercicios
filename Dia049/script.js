const numeroTexto = "150";
const decimalTexto = "19.75";
const numeroDecimal = 12.6789;
const invalido = "JavaScript";
const numeros = [10, 50, 25, 100, 5];

console.log(Number(numeroTexto));//String para number
console.log(String(150)); //Number para String
console.log(parseInt(decimalTexto)); //String para inteiro
console.log(parseFloat(decimalTexto)); //String para decimal;
console.log(Number.isNaN(Number(invalido)));
console.log(numeroDecimal.toFixed(2)); //Definir casas decimais
console.log(Math.round(numeroDecimal)); //Arredondar normalmente
console.log(Math.floor(numeroDecimal)); //Arredondar para baixo
console.log(Math.ceil(numeroDecimal)); //Arredondar para cima
console.log(Math.random()); //Numero aleatório entre 0 e menor que 1
console.log(Math.max(...numeros)); //Maior numero
console.log(Math.min(...numeros)); //Menor numero
