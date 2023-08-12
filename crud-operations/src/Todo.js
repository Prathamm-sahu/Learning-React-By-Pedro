import React from 'react';
import './App.css';
import Task from './Task';

function Todo() {
  const [todoList, setTodoList] = React.useState([])
  const [newTask, setNewTask] = React.useState("")

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false
    }
    const newTodoList = [...todoList, task]
    setTodoList(newTodoList)
  }

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => {
      if (task.id === id) {
        return false
      } else {
        return true
      }
    })

    setTodoList(newTodoList)
  }

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true }
        } else {
          return task
        }
      })
    )
  }

  return (
    <div className="App">
      <div className='addTask'>
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              deleteTask={deleteTask}
              completed={task.completed}
              completeTask={completeTask}
            />
          )})}
      </div>
    </div>
  );
}

export default Todo;
