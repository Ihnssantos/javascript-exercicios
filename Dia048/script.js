const email = "   IGOR.HENRIQUE@GMAIL.COM   ";
const frase = "JavaScript é incrível e JavaScript está ficando cada vez mais familiar";


const emailLimpo = email.trim();
const emailPadronizado = email.toLowerCase();
const emailValido = email.includes("@");
const dominio = email.slice(17, 26).toLowerCase();
const fraseAlterada = frase.replaceAll("JavaScript", "JS");
const palavras = frase.split(" ");
const comecaComJavaScript = frase.startsWith("JavaScript");


console.log("Removendo espaço: " + emailLimpo);
console.log("Padronizando o email: " + emailPadronizado);
console.log("Validando email: " + emailValido);
console.log("Criando dominio: " + dominio);

console.log(" ")

console.log("Alterando frase: " + fraseAlterada);
console.log(palavras);
console.log("A frase começa com JavaScript? ");
if (comecaComJavaScript === true) {
    console.log("Sim")
} else {
    console.log("Não")
};