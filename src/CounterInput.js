import React from 'react'
import {incrementAction,decrementAction} from './Action'
import {useDispatch} from 'react-redux'

const CounterInput = () => {

    const dispatch = useDispatch()

    return (
        <div>
            <button
                onClick={() => dispatch(incrementAction())}
            >+</button>
            <button 
                 onClick={() => dispatch(decrementAction())}
            >-</button>
        </div>
    )
}

export default CounterInput
