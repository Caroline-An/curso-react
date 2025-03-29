import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
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

  return (
    //dentro dos returns só pode entrar uma div por vez
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold font-sans">
          Gerenciador de Tarefas
        </h1>
        <Tasks tasks={tasks} />
        <AddTask />
      </div>
    </div>
  );
}

export default App;
