import "./App.css";
import { Counter } from "./components/count";
import { MyComponent } from "./components/myComponent";
import { Provider } from "react-redux";
import { store } from "./redux/store";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <MyComponent />
      </div>
    </Provider>
  );
}

export default App;
