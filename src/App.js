import './App.css';
import Login from "./components/Login";
import Counter from './components/Counter';
import Togglepassword from './components/Togglepassword';
function App() {
  return (
    <div className="container">
     <Counter />
     <Login />
     <Togglepassword />
    </div>
  );
}

export default App;
