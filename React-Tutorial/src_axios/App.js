
import './App.css';
import Search from './components/Search';
import List from './components/List'

import React from 'react'

export default class App extends React.Component {

  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: ''
  }

  updateAppState=(stateObj)=>{
    this.setState(stateObj)
  }

  render(){
    return (
      <div className="container">
        <Search updateAppState = {this.updateAppState}/>
        <List {...this.state}/>
      </div>
    )
  }
}