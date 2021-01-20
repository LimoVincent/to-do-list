import React from 'react'
import Todo from './Todo'

const ToDos = ({ todos, setTodos }) => {
  return (
    <div className='todos'>
      <h1> Todos</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <Todo todo={todo} todos={todos}  setTodos={setTodos} />
        </div>
      ))}
    </div>
  )
}
export default ToDos
