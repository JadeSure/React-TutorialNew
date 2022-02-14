import React, { Component } from 'react'
import './index.css'


export default class Item extends Component {
    state = {mouse: false}

    handleMouse = (flag)=>{
        return ()=>{
            this.setState({mouse: flag})
        }
    }

    handleCheck = (id)=>{
        return (event)=>{
            this.props.status(id, event.target.checked)
        }
    }

    handleDelete = (id)=>{
       
        if(window.confirm('Sure to delete?')){
            this.props.deleteTodo(id)
        }
    }
    

    render() {
        const {todo} = this.props
        const {mouse} = this.state
 
        return (
                <li onMouseEnter= {this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                    <label htmlFor={todo.id}>
                        <input id = {todo.id} type="checkbox" checked={todo.done} onChange={this.handleCheck(todo.id)}/>
                        <span>{todo.name}</span>
                    </label>
                    <button className="btn btn-danger" style= {{display: mouse? 'block': 'none'}} onClick={()=>this.handleDelete(todo.id)}>Delete</button>
                </li>
         
        )
    }
}
