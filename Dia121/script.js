const global = "fora";

function testeEscopo() {
    const local = "dentro";
    console.log(global);
    console.log(local);
}

testeEscopo();
//console.log(local); //erro


if (true) {
    let a = 1;
    var b = 2;
}

console.log(b); //2
//console.log(a); //erro


function criarContador() {
    let contador = 0;
    return function() {
        contador++;
        return contador;
    };
}

const meuContador = criarContador();
console.log(meuContador());
console.log(meuContador());
console.log(meuContador());