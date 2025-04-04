import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

function App() {
  //usamos o State quando ao alterar a variável precisamos alterar a interface também
  const [tasks, setTask] = useState(
    JSON.parse(localStorage.getItem("tasks")) ||
      [
        /*{
        id: 1,
        title: "Estudar programação",
        description: "15 de julho às 10:00",
        isCompleted: false,
      },
      {
        id: 2,
        title: "Estudar matemática",
        description: "16 de julho às 10:00",
        isCompleted: false,
      },
      {
        id: 3,
        title: "Estudar português",
        description: "17 de julho às 10:00",
        isCompleted: false,
      },*/
      ]
  );

  //executa a função {} sempre que algum valor que for adicionado na lista [] for atualizado
  useEffect(() => {
    //dessa forma estou convertendo o task para string
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //a lista [] vazia indica q a função só é executada uma vez, qnd o user acessar pela primeira vez a aplicaçãoo
  useEffect(() => {
    const fetchTasks = async () => {
      //CHAMAR A API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        }
      );

      //PEGAR OS DADOS RETORNADOS E CONVERTER PARA JSON
      const data = await response.json();
      console.log(data);

      //PERSISTIR OS DADOS NO STATE
      setTask(data);
    };
    //FAZ REALMENTE FUNCIONAR
    fetchTasks();
  }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      //PRECISO ATUALIZAR ESSA TAREFA
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      //NÃO PRECISO ATUALIZAR ESSA TAREFA
      return task;
    });

    setTask(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    //QUANDO O BOTÃO (Tasks.jsx) É CLICADO, ELE CHAMA ESSA FUNÇÃO PASSANDO O ID COMO PARÂMETRO, DAÍ A FUNÇÃO VAI FILTRAR AS ATIVIDADES QUE TENHAM ID DIFERENTE DAQUELE QUE FOI CLICADO
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTask(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(), //v4 cria um id aleatório
      title: title,
      description: description,
      isCompleted: false,
    };
    setTask([...tasks, newTask]);
  }

  return (
    //dentro dos returns só pode entrar uma div por vez
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold font-sans text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
