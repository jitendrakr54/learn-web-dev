import React, { useMemo } from "react";

import classes from "./DemoList.module.css";

/* 
const DemoList = (props) => {
  const sortedList = props.items.sort((a, b) => a - b);

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
*/

// ******************************************** Optimizing with useMemo()

const DemoList = (props) => {
  const { items } = props;

  // Can't use useCallback() as it returns memoized callback function.

  const sortedList = useMemo(() => {
    console.log("Items sorted");
    return items.sort((a, b) => a - b);
  }, [items]);

  console.log("DemoList RUNNING!");

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
