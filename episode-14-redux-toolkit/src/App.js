import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Contact } from './pages/Contact';
import { Navbar } from './pages/Navbar';
import { Provider } from 'react-redux';
import { store } from './store'

function App() {
  const [username, setUsername] = useState("Pratham")
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Login />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
          </Routes>
        </Router>
      </Provider>
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
