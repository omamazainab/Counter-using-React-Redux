import React from 'react'
import {useDispatch} from 'react-redux'

const CounterInput = () => {

    const dispatch = useDispatch()

    return (
        <div>
            <button
                onClick={() => dispatch({
                    type: 'INCREMENT'
                })}
            >+</button>
            <button 
                 onClick={() => dispatch({
                    type: 'DECREMENT'
                })}
            >-</button>
        </div>
    )
}

export default CounterInput
