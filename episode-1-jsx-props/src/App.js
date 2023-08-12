import './App.css';
import Job from './Job'

function App() {
  const name = "Pratham"
  const statement = <h1>Hi My name is Pratham Sahu</h1>
  const age = <h2>21</h2>
  const email = <h2>Pratham@pratham.com</h2>
  const user = (
    <div>
      {statement}
      {age}
      {email}
    </div>
  );
  return (
    <div className="App">
      <h1>Hello World {name}</h1>
      {statement}
      {age}
      {email}

      {user}
      {user}
      {user}
      <User name="Pratham" age={21} email="pratham@pratham.com" />
      <Job salary={90000} position="Senior SDE" company="Apple" />
      <User name="Nishant" age={21} email="nishant@pratham.com" />
      <Job salary={80000} position="junior SDE" company="google" />
      <User name="Udgeet" age={21} email="udgeet@pratham.com" />
      <Job salary={70000} position="Project Manager" company="Meta" />
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  );
}

export default App;
