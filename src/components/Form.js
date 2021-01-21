import { Button } from 'antd'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import './../App.css'

function Form({ todos, todo, setTodo, setTodos }) {
  const submitHandler = (e) => {
    e.preventDefault()
    if (todo) {
      const newtodo = {
        id: uuidv4(),
        title: todo,
        completed: (Math.random()) >= 0.5,
      }
      setTodos([...todos, newtodo])
    } else alert('to do can not be empty')
  }
  return (
    <div>
      <form classname='form' onSubmit={(e) => submitHandler(e)}>
        <label htmlFor='input-todo'> Input Todo</label>
        <input
          placeholder='add todo'
          type='text'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button type='primary' style={{ display: 'hidden' }}></Button>
      </form>

      <Button
        type='primary'
        onClick={() => {
          const newarray = [] // is this direct mutation of array ??, it works though :)
          setTodos(newarray)
        }}
      >
       Delete all
      </Button>
    </div>
  )
}

export default Form
