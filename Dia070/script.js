const verificarNota = (nota) => {
    if (nota >= 7) {
        return "Aprovado";
    } else if (nota >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    };
};

console.log(verificarNota(8));
console.log(verificarNota(6));
console.log(verificarNota(3));