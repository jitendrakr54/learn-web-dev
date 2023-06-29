import React, { useState } from "react";

//  In Profiler tab, we can create performance profile to analyze the performance of your application.

const ListItem = ({ text }) => {
  return <li>{text}</li>;
};

const List = ({ noOfItems }) => {
  const listItems = [];
  for (let i = 0; i < noOfItems; i++) {
    listItems.push(<ListItem key={i} text={i} />);
  }
  return <ul>{listItems}</ul>;
};

/* const PerformanceTest = () => {
  const [name, setName] = useState("");

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => alert("Hey" + name)}>Click me</button>
      <List noOfItems={100} />
    </>
  );
}; */

const Message = () => {
  const [name, setName] = useState("");
  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => alert("Hey" + name)}>Click me</button>
    </>
  );
};

const PerformanceTest = () => {
  return (
    <>
      <Message />
      <List noOfItems={100} />
    </>
  );
};

export default PerformanceTest;
