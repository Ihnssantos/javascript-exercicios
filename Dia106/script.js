const buscarTarefa = async () => {
  const tarefa = await fetch("https://jsonplaceholder.typicode.com/todos");

  const tratarTarefas = await tarefa.json();

  const filtrarTarefa = tratarTarefas.filter((tarefa) => tarefa.userId === 1);
  const tarefaTitulo = filtrarTarefa.map((tarefa) => tarefa.title);

  console.log(tarefaTitulo);
};

buscarTarefa();
