import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

const App = () => {
  const[showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
         [{
           id: 1,
           text: 'Meeting',
           day: 'Jan 20 at 1:30 pm',
           reminder: false,
         },
         {
          id: 2,
          text: 'Piano Practice',
          day: 'Jan 20 at 4:30 pm',
          reminder: false,
        },
        {
          id: 3,
          text: 'Interview',
          day: 'Jan 21 at 1:30 pm',
          reminder: false,
        }]
    )

//delete task
const deleteTask = (id) => {
  //filters through the tasks array and shows only the ones not including the deleted task w id
  setTasks(tasks.filter((task) => task.id !== id ))
}

//add task
const addTask = (task) => {
  const id= Math.floor(Math.random() * 10000)+1
  const newTask = { id, ...task}
  setTasks([...tasks, newTask])
}

// toggle remiender
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
    task.id === id ? {...task, reminder: !task.reminder } : task
    )
  )
}

  return (
    <div className="container">

      {/* HEADING */}
      <Header onAdd={() => setShowAddTask(!showAddTask)} title='Task Manager' showAdd={showAddTask}/>

      {showAddTask && <AddTask onAdd={addTask}/>}

      {/* TASK LIST (logic for ==> if no tasks, display message) */}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete=
        {deleteTask} onToggle={toggleReminder}/>
      ) : (
        'No more tasks :)'
      )}
    </div>
  );
}

export default App;
