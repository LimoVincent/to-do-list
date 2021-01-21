import React, { useState } from 'react'
import './App.css'
import ToDos from './components/Todos'
import { v4 as uuidv4 } from 'uuid'
import Form from './components/Form'

const App = () => {
  const data = [
    {
      id: uuidv4(),
      title: 'Add   Task -Click the button to add more tasks',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Delete  Task - Click the button to add more tasks',
      completed: true,
    },
    {
      id: uuidv4(),
      title: 'Update  Task - Click the button to add more tasks ',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Get task list - Click the button to add more tasks ',
      completed: true,
    },
  ]
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState(data)

  return (
    <div className='app'>
      <h1>Todo List</h1>
      <Form {...{ todos, todo, setTodo, setTodos }} />
      <ToDos todos={todos} setTodos={setTodos} />
    </div>
  )
}
export default App
