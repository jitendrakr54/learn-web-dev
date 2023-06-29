import React from "react";
import BackwardCounter from "./components/BackwardCounter";
import ForwardCounter from "./components/ForwardCounter";
import { Date } from "./components/ForwardCounter";

function App() {
  return (
    <React.Fragment>
      {/* <Date /> */}
      <ForwardCounter />
      <BackwardCounter />
    </React.Fragment>
  );
}

export default App;
