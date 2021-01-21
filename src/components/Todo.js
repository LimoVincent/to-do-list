import React from 'react'
import { DeleteOutlined } from '@ant-design/icons'
import './../App.css'
function Todo({ todos, todo, setTodos }) {
  const { id, title, completed } = todo

  const deleteHandler = (id) => {
    setTodos(todos.filter((todo) => id !== todo.id))
  }

  const completedHandler = (id) => {
    // const newtodos = {...todos, todos.id===id : }
    setTodos(todos.map((todo) => todo))
  }

  const text_decoration_line = completed ? 'underline line-through' : 'none'

  return (
    <div className='todo'>
      <div style={{ textDecoration: text_decoration_line }}>
        <h5>{title}</h5>
      </div>
      <div>
        <DeleteOutlined type='primary' onClick={() => deleteHandler(id)} />
      </div>

      <button onClick={() => completedHandler(id)}>
        <span role='img' aria-label='done'>
          {completed ? 'undone' : '✅'}
        </span>
      </button>
    </div>
  )
}

export default Todo
