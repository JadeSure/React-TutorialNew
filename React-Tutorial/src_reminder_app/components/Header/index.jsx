import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    handlekeyUp = (event)=>{
        const {keyCode, target} = event
        if (keyCode !== 13 || target.value.trim() === "") return

        this.props.addTodo(target.value)
        target.value = ""
    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handlekeyUp} type="text" placeholder="Input tasks, 'enter' to confirm" />
            </div>
        )
    }
}
