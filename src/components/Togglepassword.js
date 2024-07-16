import React, { useState } from 'react'

const Togglepassword = () => {

   const[email,setEmail] = useState("");
   const [visible, setVisible] = useState(false);

   const handleVisible = () =>{
    setVisible(!visible);
   }

 
  return (
  <>
    <h1>Togglepassword</h1>
    Email:<input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
    Password:<input type={visible?"text":"password"} />
    <button onClick={handleVisible}>{visible?"👁️":"😵"}</button>
      </>
  )
}

export default Togglepassword