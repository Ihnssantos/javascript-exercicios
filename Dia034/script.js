const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node", "SQL"];

const selecionadas = tecnologias.slice(2, 5);

console.log(tecnologias);
console.log(selecionadas);



tecnologias.splice(1, 1, "Tailwind");

console.log(tecnologias);