import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer';
import React from 'react'

// function App() {
  
//   return (
//     <div className="todo-container">
//       <div className = "todo-wrap">
//       <Header/>
//         <List/>
//       <Footer/>

//       </div>
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */} 
//     {/* <FormSignUp/> */}

//     {/* <LifeCycle/>

//     <DiffKeys/> */}
   
//     </div>
//   );
// }

// export default App;


export default class App extends React.Component {
  state = {
    todos:[
      {id: '001', name:'eating', done: true},
      {id: '002', name:'sleeping', done: true},
      {id: '003', name:'fucking', done: false}
    ]
  }

  addTodo =(name) => {
    const {todos} = this.state
    const newTodo = {id: this.state.todos.length + 1 + "", name, done: false}
    // const newTodos = [newTodo,...todos]
    todos.unshift(newTodo)
    // this.setState({todos: newTodos})
    this.setState({todos})
  }

  changeStatus = (id, newStatus)=>{

    const {todos} = this.state
    const newTodos = todos.map(value =>{
  
      if (value.id === id) return {...value, done:newStatus}
      else return value
    })
    console.log(newTodos);

    this.setState({todos: newTodos})
  }

  deleteTodo = (id)=>{
    const {todos} = this.state
    const newTodos = todos.filter((item)=>{
        return item.id !== id
    })

    this.setState({todos: newTodos})
     
  }

  deleteAllFinished = ()=>{
    const {todos} = this.state
    const newTodos = todos.filter((item)=>{
      return !item.done 
    })
    this.setState({todos: newTodos})
  }

  updateAll = (status)=>{

    const {todos} = this.state
    const newTodos = todos.map((item)=>{
        item.done = status
        return item
    })
    console.log(newTodos);
    this.setState({todos: newTodos})
  }

  render(){
    return (
      <div className="todo-container">
        <div className = "todo-wrap">
          <Header addTodo = {this.addTodo}/>
            <List todos = {this.state.todos} status={this.changeStatus} deleteTodo = {this.deleteTodo}/>
          <Footer deleteAllFinished = {this.deleteAllFinished} updateAll = {this.updateAll} todos = {this.state.todos}/>
        </div>
      </div>
    )
  }
}