import React, { useState } from 'react';
import ListTasks from './components/ListTasks'

function App() {
  // Arreglo vacío donde irán guardándose las tareas nuevas
  const tasksData = []

  // state
  const [tasks, setTasks] = useState(tasksData);

  // AGREGAR TAREAS: Función que agrega nuevas tareas al state [tasks], recibe un task como parámetro
  const addTask = (task) => {
    setTasks([
      ...tasks,
      task
    ])
  }

  // ELIMINAR TAREA
  const deleteTask = (task) => {
    setTasks(
      tasks.filter(elem => elem.task !== task)
    )
  }

  return (
    <div>
      <ListTasks 
        // Mandando la función 'addTask' al componente 'ListTasks'
        addTask={addTask}
        // Mandando el state 'task' como props al componente 'ListTasks'
        tasks={tasks}
        // Mandando la función 'deleteTask' como props al componente 'ListTasks'
        deleteTask={deleteTask}
      />     
    </div>
  );
}

export default App;
