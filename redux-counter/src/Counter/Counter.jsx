import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../App.css'
import { increment , decrement , incrementByValue, decrementByValue } from '../redux/reducers/counterSlice'
// import { decrementAction, decrementByValue, incrementAction, incrementByValue } from '../redux/actions/counterActions'

function Counter() {

    const [value,setValue] = useState(1)

    const {countState} = useSelector (state => state.counter)
    const dispatch = useDispatch()

    const handleIncrement = () => {
        // incrementAction(dispatch)
        dispatch(increment()) 
    }

    const handleDecrement = () => {
        // decrementAction(dispatch)
        dispatch(decrement())
    }

    const incByValue = (vl) => {
        // incrementByValue(vl,dispatch)
        dispatch(incrementByValue(vl))
    } 

    const decByValue = (x) => {
        // decrementByValue(x,dispatch)
        dispatch(decrementByValue(x))
    }
  return (
    <div className='counter'> 

        <h1>Hello Redux</h1>

        <p>{countState}</p>

        <div className="btns">
            <button className="increment" onClick={handleIncrement}>Increment</button>
            <button className="decrement" onClick={handleDecrement}>Decrement</button>
        </div>

        <input 
            type="number" 
            placeholder='value'
            value={value}
            onChange = {(e) => setValue(e.target.value)}
        />
        <div className="btns">
            <button 
            className="increment" 
            onClick={() => decByValue(parseInt(value))}
            >Decrement By {value}</button>
            <button className="increment" onClick={() => incByValue(parseInt(value))} >Increment By {value}</button>
        </div>        
    </div>
  )
}

export default Counter