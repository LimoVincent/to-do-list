import React from 'react'
import Todo from './Todo'
import './../App.css'

const ToDos = ({ todos, setTodos }) => {
  const completedtodos = todos.filter(({ completed }) => completed)
  return (
    <div className='todos'>
      <h3>
        {completedtodos.length}/{todos.length} Todos Completed{' '}
       ( {parseInt(completedtodos.length/todos.length *100)}%)
      </h3>
      <ol>
        {todos ? (
          todos.map((todo) => (
            <li key={todo.id}>
              <Todo {...{ todo, todos, setTodos }} />
            </li>
          ))
        ) : (
          <p>Empty todos.</p>
        )}
      </ol>
    </div>
  )
}
export default ToDos
