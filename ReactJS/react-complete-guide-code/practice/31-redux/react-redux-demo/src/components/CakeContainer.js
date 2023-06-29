/* 
import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number Of Cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cakes</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer); 
*/

// ******************************************* Using useSelector
import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number Of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cakes</button>
    </div>
  );
}

export default CakeContainer;
