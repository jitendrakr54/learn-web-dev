import React, { useState } from "react";

const HigherOrderComponent = function (WrappedComponent) {
  const NewComponent = () => {
    const [counter, setCounter] = useState(0);

    const incrementCount = () => {
      setCounter((counter) => ++counter);
    };
    return <WrappedComponent count={counter} incrementCount={incrementCount} />;
  };
  return NewComponent;
};

export default HigherOrderComponent;
