const alunos = [
  { nome: "Carlos", nota: 8 },
  { nome: "Ana", nota: 5 },
  { nome: "Pedro", nota: 9 },
  { nome: "Julia", nota: 6 },
];

const filtrarNota = alunos.filter((aluno) => aluno.nota >= 7);
const aprovados = filtrarNota.map((aluno) => aluno.nome);

console.log(aprovados);
