const texto = "Aprendendo JavaScript e dominando JavaScript com foco em react no frontend e node.js no backend";

console.log(texto.trim());//remove espaço
console.log(texto.length);//quantidade de caracteres
console.log(texto[0]);//acessando o primeiro caracter através do indice
console.log(texto.toUpperCase());//trasnforma em maiúsculo
console.log(texto.toLowerCase());//transforma em minúsculo
console.log(texto.includes("JavaScript"));//verifica se existe
console.log(texto.indexOf("react"));//verifica qual indice
console.log(texto.startsWith("Aprendendo"));//verifica se começa
console.log(texto.endsWith("backend"));//verifica se termina
console.log(texto.slice(11, 21));//estrai pelo indice
console.log(texto.replace("JavaScript", "JS"));//troca a primeira ocorrencia
console.log(texto.replaceAll("JavaScript", "JS"));//troca todas as ocorrencia
console.log(texto.split(" "));

