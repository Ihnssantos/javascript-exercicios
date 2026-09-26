const agora = new Date(); //data completa

console.log(agora); //exibir a data especifica
console.log(agora.getFullYear()); //ano
console.log(agora.getMonth()); //mes
console.log(agora.getDate()); //dia do mes
console.log(agora.getDay()); //dia da semana

console.log(agora.getHours()); //hora
console.log(agora.getMinutes()); //minutos
console.log(agora.getSeconds()); //segundos

console.log(agora.getTime()); //timestamp

console.log(agora.toLocaleDateString()); //data formatada
console.log(agora.toLocaleString()); //data + hora



const dataEspecifica = new Date(2026, 8, 6); //cria uma data especifica
console.log(dataEspecifica);


const data1 = new Date(2026, 0, 1);
const data2 = new Date(2026, 11, 31);
console.log(data1 < data2); //criando e comparando duas datas