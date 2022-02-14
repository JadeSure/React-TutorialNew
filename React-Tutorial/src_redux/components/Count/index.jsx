import React, { Component } from 'react'

// import store from '../../redux/store';
// import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from '../../redux/count_action'

export default class Count extends Component {

    // componentDidMount() {
    //     store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }


    // state = {count : 0}
    increment =()=>{
        const {value} = this.selectNumber
        this.props.increment(value*1)
        // this.setState({count: this.state.count+ value*1})
        // store.dispatch(createIncrementAction(value*1))
    }

    decrement =()=>{
        const {value} = this.selectNumber
        this.props.decrement(value*1)
        // store.dispatch(createDecrementAction(value*1))
        // this.setState({count: this.state.count- value*1})
    }

    incrementIfOdd =()=>{
        const {value} = this.selectNumber
        // const count = store.getState()
        // if(count%2 !== 0){
        //     store.dispatch(createIncrementAction(value*1))
        // } 
        if(this.props.count%2 !== 0){
            this.props.increment(value*1)
        }
       
    }

    incrementAsync =()=>{
        const {value} = this.selectNumber
        this.props.asyncIncrement(value*1, 500)

        // const {count} = this.state
        // setTimeout(()=>{
        // store.dispatch(createIncrementAsyncAction(value*1, 500))
        // }, 500)
    }
    
    render() {
       console.log(this.props);
        return (
            <div>
                {/* <h1>Sum up:{store.getState()} </h1> */}
                <h1>Sum up: {this.props.count}</h1>
                <select ref = {c=>this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>Odd? Add</button>
                <button onClick={this.incrementAsync}>async? Add</button>
            </div>
        )
    }
}
