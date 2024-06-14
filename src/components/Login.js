import React, { useState } from 'react'

const Login = () => {
    const [value,setValue] = useState({
        name:"",
        email:"",
        password:""
    })
    const handleSubmit = (e) =>{
        e.preventDefault();
        {value.name && value.email && value.password ? alert("login Successfully...!"):alert("please enter the details")}
       
    }
  return (
    <>
        <h1>Login Form Validation</h1>
        <form>
        Name:<input type='text' placeholder='abcd' value={value.name} onChange={(e)=>setValue({...value,name:e.target.value})} />
        Email:<input type='email' placeholder='abcd123@email.com' value={value.email} onChange={(e)=>setValue({...value,email:e.target.value})} />
        Password:<input type='password' value={value.password} onChange={(e)=>setValue({...value,password:e.target.value})} />
        <button onClick={handleSubmit}> Login</button>
        </form>
    </>
  )
}

export default Login