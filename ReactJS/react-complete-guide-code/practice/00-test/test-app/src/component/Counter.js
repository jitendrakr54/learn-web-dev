import { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // console.log("Counter 1");
    const interval = setInterval(() => {
      // console.log("Counter 2");
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Counter: {counter}</p>
    </div>
  );
};
export default Counter;
