import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { cartActions } from "../store/cart-slice";
import "./model.css";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const {
    title, quantity, total, price, id,
  } = item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        total,
        quantity,
      }),
    );
  };

  return (
    <div>
      <div className="subtotal">
        <li className="item">
          <header>
            <h3>{title}</h3>
            <div className="price">
              Rs.
              {total.toFixed(2)}
              {" "}
            </div>
          </header>
          <div className="details">
            <div className="quantity">
              x
              {" "}
              <span>{quantity}</span>
            </div>
            <div className="actions">
              <button onClick={removeItemHandler} type="submit">
                -
              </button>
              <button onClick={addItemHandler} type="submit">
                +
              </button>
            </div>
          </div>
        </li>
      </div>
    </div>
  );
}
CartItem.propTypes = {
  item: PropTypes.string.isRequired,
};

export default CartItem;
