import React, { Component } from 'react'
import './App.css';
import ToDos from './components/ToDos';


 class App extends Component {
  

   state = {
    todos : [{
      id: 1, 
      title: 'To do 1',
      completed : false
   },
   {
     id: 2, 
    title: 'To do 2',
    completed : false
  },
  {
    id: 3, 
    title: 'To do 3',
    completed : false
  }, 
  {
  id: 4, 
  title: 'To do 4',
  completed : false
  }
  ]
  }
  
  render() {
    
    return (
    <div className="App">
        <h1>ToDos : </h1>
      <ToDos todos = {this.state.todos}/>
      </div>
    )
  }
}
export default App;



