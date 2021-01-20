import React from 'react'

function Todo({ todos, todo, setTodos }) {
  const { id, title, completed } = todo

  const deleteHandler = (id) => {
    setTodos(todos.filter((todo) => id !== todo.id))
  }

  return (
    <div className='todo'>
      <h5>{title}</h5>
      <h6>{id}</h6>
      <h6>{completed}</h6>
      <button type='submit' onClick={() => deleteHandler(id)}>
        delete
      </button>
      <button type='submit' onClick={() => deleteHandler(id)}>
        done
      </button>
    </div>
  )
}

export default Todo
