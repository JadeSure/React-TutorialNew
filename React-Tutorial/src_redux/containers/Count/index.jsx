import {connect} from 'react-redux'

import CountUI from '../../components/Count'
import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from '../../redux/count_action'
// import store from '../../redux/store'

// key ==> props.key, value ==> props.value
// state saved in redux
function mapPropsToProps(state){
    return {count: state }
}

// methods for operating state
function mapDispatchToProps(dispatch){
    return {
        increment: (number)=>{
            dispatch(createIncrementAction(number))
        },
        decrement: (number)=>{
            dispatch(createDecrementAction(number))
        },
        asyncIncrement : (number, time) => dispatch(createIncrementAsyncAction(number, time))
    }
}

const CountContainer = connect(mapPropsToProps,mapDispatchToProps)(CountUI)
export default CountContainer