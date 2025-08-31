function Task({ task, deleteTask, toggleTask }) {
  return (
    <div>
      <span
        onClick={() => toggleTask(task.id)}
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </div>
  );
}

export default Task;