import React from 'react'
import './App.css';

const Task = (props) => {
  return (
    <div className='task' style={{backgroundColor: props.completed ? "green" : "white"}}>
    <h1>{props.taskName}</h1>
    <button conClick={() => props.completeTask(props.id)} lassName='btn' >complete</button>
    <button onClick={() => props.deleteTask(props.id)} className='btn'> X </button>
  </div>
  )
}

export default Task