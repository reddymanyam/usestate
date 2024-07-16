import './App.css';
import Login from "./components/Login";
import Counter from './components/Counter';
import Togglepassword from './components/Togglepassword';
import Arraylist from './components/Arraylist';
import ToggleTheme from './components/ToggleTheme';
function App() {
  return (
    <div className="container">
     <Login />
     <Counter />
     <Togglepassword />
     <Arraylist /> 
     <ToggleTheme /> 
    </div>
  );
}

export default App;
