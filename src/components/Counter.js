import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);
    const Increment = () =>{
        setCount(count+1);
    }
    const Decrement = () =>{
        setCount(count-1);
    }
    const Reset = () =>{
        setCount(0)
    }
  return (
    <>
    <h1>Counter</h1>
    <h2>Counter:{count}</h2>
    <button onClick={Increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button>
    <button onClick={Reset}>Reset</button>
    </>
  )
}

export default Counter;