// import logo from "./logo.svg";
// ********************* Initial
/* 
function App() {
  return (
    <div className="App">
      <header className="">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Hello</p>
      </header>
    </div>
  );
}
export default App;
*/

import "./App.css";
import ButtonCounter from "./component/ButtonCounter";
import Counter from "./component/Counter";
import ClickCounter from "./component/ClickCounter";
import DateTime from "./component/DateTime";
import FormTest from "./component/FormTest";
import UseEffctTest from "./component/UseEffectTest";
// import PerformanceTest from "./component/PerformanecTest";

const App = () => {
  return (
    <>
      <Counter />
      <ButtonCounter />
      <ClickCounter />
      <DateTime />
      <UseEffctTest />
      <FormTest />
      {/* <PerformanceTest /> */}
    </>
  );
};

export default App;
