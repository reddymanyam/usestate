import React, { useState } from 'react'

const Arraylist = () => {
    const[value,setValue] = useState([]);
    const [arr, setArr] = useState([]);
    const addArray = () =>{
        setArr(prev => [...prev, value]);
    }
  return (
    <>
   <h1>Arraylist</h1>
   <input type='text' onChange={(e)=>setValue(e.target.value)}/>
   <button onClick={addArray}>Add</button>
   <ul>
   {arr.map((data)=>(
       <li> {data}</li>
   ))}
   </ul>
   </>
  )
}

export default Arraylist