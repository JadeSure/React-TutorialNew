import './App.css';
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';
import React from 'react'
import MyNavLink from './components/MyNavLink';
import Header from './components/Header'
import Error from './pages/Error'

export default class App extends React.Component {

  render(){
    return (
      <div className="container">
        <Header />
        <div> 
          {/* activeClassName="777" */}
          <MyNavLink to="/about" children='About'></MyNavLink>
          <MyNavLink to="/home">Home</MyNavLink>
            {/* <NavLink to="/about">About</NavLink>
            <NavLink to="/home">Home</NavLink> */}
        </div>

       {/* register router */}

        <div>
          <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/home/*" element={<Home />}/>
            <Route path="/" element={<Home />}/>
            <Route path="*" element ={<Error/>}/>
          </Routes>
        </div>
      </div>
    )
  }
}