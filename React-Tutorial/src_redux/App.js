import logo from './logo.svg';
import './App.css';
import React from 'react'
// import Count from './components/Count'
import Count from './containers/Count'
import store from './redux/store'

function App() {
  
  return (
    <div className="todo-container">
      <Count store = {store}/>
   
    </div>
  );
}

export default App;

