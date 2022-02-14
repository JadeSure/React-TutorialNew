import React, { Component } from 'react'
import Item from '../Item'
import PropTypes from 'prop-types'
import './index.css'

export default class List extends Component {

    static propTypes = {
        status: PropTypes.func.isRequired,
        todos: PropTypes.array.isRequired,
        deleteTodo: PropTypes.func.isRequired,
    }

    render() {
        const {todos, status, deleteTodo} = this.props
        return (
            <div className="todo-main">
                {
                    todos.map(todo =>{
                        return <Item todo = {todo} key={todo.id} status={status} deleteTodo = {deleteTodo}/>
                        // return <Item {...todo} key={todo.id}/>
                    })
                }
            </div>
        )
    }
}
