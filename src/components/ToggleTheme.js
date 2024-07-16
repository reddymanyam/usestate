import React, { useState } from 'react'

const ToggleTheme = () => {

    const [theme, setTheme] = useState(true);

    const themes = {

       darktheme :{
           backgroundColor:"black",
           color:"white"
        }
        ,
        whitetheme :{
            
             backgroundColor:"white",
           color:"black"
            
        }
    }
  return (
    <>
     change theme:<input type='checkbox'  onChange={()=>setTheme(prevThem => !prevThem)} />
        <div style={theme? themes.whitetheme : themes.darktheme}>
           
            <h1>Theme changer.....</h1>
            <p>I am good at react practicing my skills to improve my self...</p>
        </div>
    </>
  )
}

export default ToggleTheme;