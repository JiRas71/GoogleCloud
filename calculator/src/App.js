import logo from "./logo.svg";
import CalculatorForm from './calculator/CalculatorForm';
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center mx-auto">
          <div className="App-header col-lg-5 d-flex align-items-center justify-content-center">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="react-logo fs-1 mt-3 me-3">React</p>
          </div>
          <CalculatorForm />
        </div>
      </div>
    </div>
  );
}

export default App;
