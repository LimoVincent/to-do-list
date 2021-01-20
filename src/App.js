import React, { useState } from 'react'
import './App.css'
import ToDos from './components/Todos'
import { v4 as uuidv4 } from 'uuid'
import { Layout} from 'antd'
  
const { Header,Footer, Content } = Layout

const App = () => {
  const data = [
    {
      id: uuidv4(),
      title: 'Add Task - for example we need to implement work',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Delete Task - for example we need to implement work',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Update Task - for example we need to implement work',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Get task list - for example we need to implement work',
      completed: false,
    },
  ]
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState(data)

  return (
    <Layout>
      <Header>Todo List</Header>
      <Content>
        <ToDos todos={todos} setTodos={setTodos} />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default App
