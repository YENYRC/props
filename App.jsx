import { useState } from 'react';
import Task from './src/Task';
import AddTaskForm from './AddTaskForm';
import './App.css'; 

function App() {
  
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  
  const addTask = (taskText) => {
    const newTask = {
      id: tasks.length + 1, 
      text: taskText,
      completed: false
    };
    setTasks([...tasks, newTask]); 
  };

  
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  
  const toggleTask = (taskId) => {
    setTasks(
      tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      {/* Formulario para añadir tareas */}
      <AddTaskForm addTask={addTask} />
      {/* Lista de tareas */}
      <div>
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;