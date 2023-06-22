import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './counterSlice'

export const Counter = () => {

    const count = useSelector(state => state.counter.count);

    const dispatch = useDispatch()

    const [incrementAmount, setIncrementAmount] = useState(0)

    const addValue = Number(incrementAmount) || 0

    const add = () => {
      dispatch(incrementByAmount(addValue))
    }

  return (
    <section>
        <p>{count}</p>
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
        <div>
            <input type="text" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value) }/>
        </div>
        <button onClick={add}>Add</button>
    </section>
  )
}
