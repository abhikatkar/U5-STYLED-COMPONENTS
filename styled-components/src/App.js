import logo from './logo.svg';
import './App.css';
import { Button } from './Components/Button';
import { useState } from 'react';

function App() {
  const [show ,setShow] = useState("Light theme")
  return (
    <div className="App">
      <h1>Styled Components</h1>
      <Button show={show} onClick={()=>{
        setShow(show==="Light theme" ? "Dark theme":"Light theme")
      }}>{show}</Button>
    </div>
  );
}

export default App;
