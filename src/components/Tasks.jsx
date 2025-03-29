function Tasks(props) {
  return (
    <ul className="space-y-4">
      {props.tasks.map((task) => (
        <li key={task.id} className="bg-slate-400 text-white p-2 rounded-md">
          {task.text}
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
