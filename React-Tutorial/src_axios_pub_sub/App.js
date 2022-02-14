
import './App.css';
import Search from './components/Search';
import List from './components/List'

import React from 'react'

export default class App extends React.Component {

  render(){
    return (
      <div className="container">
        <Search/>
        <List/>
      </div>
    )
  }
}