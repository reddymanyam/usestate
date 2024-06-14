import React, { useState } from 'react'

const Togglepassword = () => {
    const[visible, setVisible] = useState(false);
    const handleVisible = () =>{
         setVisible(!visible)
    }

  return (
  <>
    <h1>Togglepassword</h1>
    Password:<input type={visible?"text":"password"}/>
    <button onClick={handleVisible}>{visible?"👁️":"😵"}</button>
  </>
  )
}

export default Togglepassword