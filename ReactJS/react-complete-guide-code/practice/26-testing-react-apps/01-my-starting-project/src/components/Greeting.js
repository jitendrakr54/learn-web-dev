// ***************************************** Testing user interaction & state
/* 
import { useState } from "react";
import Async from "./Async";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  // const changeTextHandler = () => {
  //   setChangedText((prev) => !prev);
  // };

  return (
    <div>
      <h1>Hello World!</h1>
      {!changedText && <p>It's good to see you!</p>}
      {changedText && <p>Changed!</p>}
      {!changedText && <Output>It's good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text</button>
      <Async />
    </div>
  );
};

export default Greeting;
*/

// ***************************************** testing connected components
import { useState } from "react";
import Async from "./Async";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h1>Hello World!</h1>
      {!changedText && <Output>It's good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text</button>
      <Async />
    </div>
  );
};

export default Greeting;
