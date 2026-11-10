const numeros = [1, 2, 3, 4, 5];

numeros.push(6);
numeros.pop();
console.log(numeros);

numeros.forEach(function(numero) {
    console.log(numero);
});


const dobro = numeros.map((numero) => numero * 2);
console.log(dobro);


const pares = numeros.filter((numero) => numero % 2 === 0);
console.log(pares);


const maiorQueTres = numeros.find((numero) => numero > 3);
console.log(maiorQueTres);


const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(soma);


console.log(numeros.length);
console.log(numeros.includes(3));