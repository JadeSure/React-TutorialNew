import React, { Component } from 'react'
import './index.css'


export default class Footer extends Component {

    handleStatus =(event) => {
        this.props.updateAll(event.target.checked)
       
    }

    deleteAllFinished = () => {
        this.props.deleteAllFinished()
    }
    
    render() {
        const {todos} = this.props
        const doneCount = todos.reduce((pre, current)=> pre + (current.done? 1: 0), 0)
        const totalCount = todos.length
        return (
            <div className="todo-footer">
                <div className="todo-wrapper">
                <label htmlFor="status">
                    <input id="status" type="checkbox" onChange={this.handleStatus} checked={doneCount===totalCount && doneCount!== 0? true: false}/>
                    <span id= "status">finished {doneCount}/total {totalCount}</span>   
                </label>
                <button className="btn btn-danger" onClick={this.deleteAllFinished}>Clean all the finished tasks</button>
                </div>
            </div>
        )
    }
}
