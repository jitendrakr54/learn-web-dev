import { useState } from "react";

const ButtonCounter = () => {
  const [counter, setCounter] = useState(0);

  const increseCounterHandler = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decreaseCounterHandler = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <div>
      <button key="1" onClick={increseCounterHandler}>
        Increment(+)
      </button>
      <button key="2" onClick={decreaseCounterHandler}>
        Decrement(-)
      </button>
      <p>Counter: {counter}</p>
    </div>
  );
};
export default ButtonCounter;
