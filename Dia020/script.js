function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
}

function verificarSituacao(media) {
    if (media >= 7) {
        return "Aprovado"
    } else if (media >= 5) {
        return "Recuperação"
    } else {
        return "Reprovado"
    }
}

let media = calcularMedia(5, 7, 4);

console.log(media);//8

console.log(verificarSituacao(media));//aprovado