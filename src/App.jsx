import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  //usamos o State quando ao alterar a variável precisamos alterar a interface também
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Estudar programação",
      day: "15 de julho às 10:00",
      reminder: true,
    },
    {
      id: 2,
      text: "Estudar matemática",
      day: "16 de julho às 10:00",
      reminder: true,
    },
    {
      id: 3,
      text: "Estudar português",
      day: "17 de julho às 10:00",
      reminder: true,
    },
  ]);

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
      id: tasks.length + 1,
      text: title,
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
