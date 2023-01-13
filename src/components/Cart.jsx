import React from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";

function Cart() {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <div>
      <button className="button" type="submit" onClick={toggleCartHandler}>
        <div className="icon">
          <div className="cart">
            <AddShoppingCartIcon />
          </div>
          <span className="badge">{cartQuantity}</span>
        </div>
      </button>
    </div>
  );
}

export default Cart;
