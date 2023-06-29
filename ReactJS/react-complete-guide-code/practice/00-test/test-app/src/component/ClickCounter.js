import React from "react";
import HigherOrderComponent from "./HigherOrderComponent";

const ClickCounter = (props) => {
  return (
    <>
      <p>Hello</p>
      <button onClick={props.incrementCount}>
        Clicked {props.count} times
      </button>
    </>
  );
};

export default HigherOrderComponent(ClickCounter);
