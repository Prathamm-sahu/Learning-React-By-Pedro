import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Navbar } from './pages/Navbar';
import { useState, createContext } from 'react';

export const AppContext = createContext()

function App() {
  const [username, setUsername] = useState("Pratham")
  return (
    <div className="App">
      <AppContext.Provider value={{username, setUsername}}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

const TopComponent = () => {
  const [state, setState] = useState();
  return (
    <div>
      <MiddleComponent state={state} />
    </div>
  )
}
const MiddleComponent = (state) => {
  return (
    <div>
      <BottomComponent state={state} />
    </div>
  )
}
const BottomComponent = (state) => {
  return (
    <div>
      {state}
    </div>
  )
}

export default App;
