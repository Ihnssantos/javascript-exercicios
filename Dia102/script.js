const buscarTarefa = async () => {

    const resposta = await fetch("https://jsonplaceholder.typicode.com/todos");

    const tarefas = await resposta.json();

    const tarefasConcluidas = tarefas.filter((tarefa) => tarefa.completed === true);
    const tarefasTratadas = tarefasConcluidas.map((tarefa) => `Tarefas concluidas: ${tarefa.title}`);

    console.log(tarefasTratadas);
};


buscarTarefa();