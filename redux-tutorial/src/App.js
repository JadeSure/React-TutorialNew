import logo from './logo.svg';
import './App.css';

import React from 'react'
import { connect } from 'react-redux'
import { changeUserName, changeStatus } from './actions'
import Repos from './containers/Repos';
import Emjois from './containers/Emjois'
import Dashboard from './components/Dashboard'
import { Route, Routes, Link } from 'react-router-dom'
import Repo from './components/Repo'
class App extends React.Component {
  handleClick = () => {
    const { changeUserName } = this.props

    changeUserName({
      username: 'bar...'
    })
  }


  handleChangeStatus = () => {
    const { changeStatus } = this.props
    changeStatus({
      status: !this.props.status
    })
  }

  render() {
    return <div className="App">

      <h1>Hello {this.props.username}! {this.props.status ? 'online' : 'offline'} {this.props.gender}</h1>
      <button onClick={this.handleClick}>change name</button>
      <button onClick={this.handleChangeStatus}>change status</button>
      <nav>
        <Link to="/">Main</Link>
        <Link to="repos">repos</Link>
        <Link to="emojies">emojies</Link>
      </nav>
      {/* <Dashboard />
      <Repos />
      <Emjois /> */}
      <Routes>
        <Route path='/' element={<Dashboard />} />

        <Route path='repos' element={<Repos />} >
          <Route path=':repoId' element={<Repo />} />
        </Route>

        <Route path='emojies' element={<Emjois />} />

      </Routes>
    </div>
  }
}
// from redux => props
// map state
const mapStateToProps = (state) => {
  const { user: { username, status, gender } } = state;
  return {
    username,
    status,
    gender
  }
}

// can pass actions: 1 function
//           2. object 
const mapActionToProps = {
  changeUserName,
  changeStatus
}

export default connect(mapStateToProps, mapActionToProps)(App);
