const precos = [10, 25, 50, 100];

precos.forEach((desconto) => {
    console.log(desconto - (desconto * 10 / 100))
});