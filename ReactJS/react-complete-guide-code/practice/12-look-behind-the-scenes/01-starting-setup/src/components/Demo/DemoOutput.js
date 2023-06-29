import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DemoOutput Running!");
  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};

// export default DemoOutput;

// ********************************** Preventing Unnecessary Re-Evaluations with React.memo()
export default React.memo(DemoOutput);
