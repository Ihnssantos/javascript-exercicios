function saudacao(nome) {
    return `Olá, ${nome}!`;
}

console.log(saudacao("Igor"));


function dobro(n) {
    return n * 2;
}

console.log(dobro(5));


let dobroArrow = (n) => n * 2;

console.log(dobroArrow(5));


let maior = (a, b) => {
    if (a > b) {
        return a;
    } else {
        return b;
    }
};

console.log(maior(10, 5));


let soma = (a, b = 10) => a + b;

console.log(soma(5));
console.log(soma(5, 3));