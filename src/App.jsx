import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  return (
    //dentro dos returns só pode entrar uma div por vez
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <AddTask />
      <Tasks />
    </div>
  );
}

export default App;
