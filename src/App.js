import './App.css';
import Login from "./components/Login";
import Counter from './components/Counter';
import Togglepassword from './components/Togglepassword';
import Arraylist from './components/Arraylist';
import ToggleTheme from './components/ToggleTheme';
import { useState } from 'react';
function App() {

  const [count,setCount] = useState(0);

  return (
    <div className="container">
     <Counter count={count} setCount={setCount} />    
      <Login />
     <Togglepassword />
     <Arraylist /> 
     <ToggleTheme />  
    </div>
  );
}

export default App;
