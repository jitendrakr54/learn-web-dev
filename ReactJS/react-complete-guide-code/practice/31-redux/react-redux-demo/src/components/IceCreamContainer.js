import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { buyIceCream } from "../redux/iceCream/iceCreamActions";

const IceCreamContainer = () => {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number Of IceCream - {numOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  );
};

export default IceCreamContainer;
