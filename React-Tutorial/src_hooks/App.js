import logo from './logo.svg';
import './App.css';
import React from 'react'
import State from './components/TryState'
import Effect from './components/TryEffect'
import Ref from './components/TryRef'
import Memo from './components/TryMemo'

function App() {

  return (
    <div className="todo-container">

      <State />
      <hr />
      <Effect />
      <hr />
      <Ref />
      <hr />
      <Memo />
    </div>
  );
}

export default App;

