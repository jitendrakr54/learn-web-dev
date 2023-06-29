import { useContext, useEffect, useState } from "react";

import CartContext from "../../store/cart-context.js";
import CartIcon from "../Cart/CartIcon.js";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  // If we do below, it will calculate items array length which we don't want, we need to calculate cart item by considering
  // amount of food item

  // const noOfCartItems = cartCtx.items.length;

  // Here is the correct code
  const noOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) return;

    setBtnIsHighlighted(true);

    // need to remove animation after sometime because if not removed and if new item is added again, animation will not
    // happen because animation is already added, so the below code will re-execute the component and btnClasses will be
    //  re-evaluated.
    const timer = setTimeout(() => setBtnIsHighlighted(false), 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{noOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
