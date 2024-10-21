import './App.css';
import { useState } from 'react';
import Task from './Task.js'

function App() {
  const [todolist, setTodolist]= useState([]);
  const [newTask,setNewTask] = useState("");

  const handleChange =(e) =>{
    setNewTask(e.target.value);

  }

  const addTask = () =>{
    const task = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length -1].id +1,
      taskName: newTask,
      completed: false,
    };

   setTodolist([...todolist, task]);
  }

  const deleteTask = (id) =>{
    const  newTodolist = todolist.filter((task) =>{
      if(task.id === id){
        return false
      } else{
        return true;
      }
    })
    setTodolist(newTodolist);
  }
  const completeTask = (id) =>{
    setTodolist(
      todolist.map((task) =>{
        if(task.id===id){
          return{...task, completed: true};
        } else{
          return task
        }
      })
    )
  }
  return (
    <div className="App">
        <div className='addTask'>
          <h1>To-Do List</h1>
          <input onChange={handleChange}/>
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className='list'>
          {todolist.map((task)=>{
            return <Task  taskName={task.taskName} id={task.id} deleteTask={deleteTask} completeTask={completeTask}/>
          })}
        </div>
    </div>
  );
}

export default App;
