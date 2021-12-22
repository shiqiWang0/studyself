import logo from './logo.svg';
import './App.css';
import ReactReduxCounter from './components/ReactReduxCounter';
import {Provider} from "react-redux";
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ReactReduxCounter></ReactReduxCounter>
      </Provider>
    </div>
  );
}

export default App;
