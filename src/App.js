import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Vet Appointment for Eddie",
      day: "Nov 29th at 3:00pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting on Zoom",
      day: "Dec 1st at 8:00am",
      reminder: true,
    },
    {
      id: 3,
      text: "Behavioral Interview w/ Apple",
      day: "Dec 7th at 9:00am",
      reminder: false,
    },
  ])
  // Add task
  const addTask = (task) => {
    const id= Math.floor(Math.random() *10000)+1
    const newTask = { id, ...task} 
    setTasks([...tasks, newTask])
  }

  // Delete tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task)
    )
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length === 0 ? 'No tasks' : <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />}
    </div>
  );
}

export default App;

// {showAddTask && <AddTask onAdd={addTask} />} 
// ... same thing as ...
// {showAddTask ? <AddTask onAdd={addTask} : '' }


// If you use class based components then you need to... 
// import React from 'react';
// import Header from './components/Header'

// class App extends React.Component { // bc we need all lifecycle methods
//   render() {
//     return (
//       <>
//         <Header /> 
//         <h1>Hello from a class component!</h1>
//       </>
//     )
//   }  
// }

// export default App