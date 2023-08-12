import './App.css';
import { useState } from 'react';
import { useToggle } from './useToggle';


function App() {

  const [isVisible, toggle] = useToggle();
  const [isVisible1, toggle1] = useToggle();

  return (
    <div className="App">
      <button onClick={toggle}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <h1>Hidden Text</h1> }

      <button onClick={toggle1}>
        {isVisible1 ? "Hide" : "Show"}
      </button>
      {isVisible1 && <h1>Hidden Text</h1> }
    </div>
  );
}

export default App;
