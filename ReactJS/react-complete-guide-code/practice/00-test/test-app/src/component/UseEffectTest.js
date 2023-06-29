import { useEffect, useState } from "react";

const UseEffctTest = () => {
  const [isValid, setIsValid] = useState(false);

  console.log(isValid);
  useEffect(() => {
    console.log("EFFECT Running!");
  }, null);

  const clickHandler = () => {
    document.getElementById("h").innerText = "Hello1";
    setIsValid((prev) => !prev);
  };

  return (
    <>
      <p id="h">Hello</p>
      <button onClick={clickHandler}>Click to change</button>
    </>
  );
};

export default UseEffctTest;
