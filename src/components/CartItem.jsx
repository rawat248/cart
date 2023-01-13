import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { cartActions } from "../store/cart-slice";
import "./model.css";

function CartItem({ item }) {
  const totalAmount = useSelector((state) => state.cart.items);
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
    <li className="item">
      <header>
        <h3>{title}</h3>
        <span className="span">{price}</span>
        <div className="price">
          Rs.
          {total.toFixed(2)}
          {" "}
        </div>
        <div className="totalamount">
          TotalAmount:
          {totalAmount.reduce((sum, i) => (sum += i.quantity * i.price), 0)}
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
  );
}
CartItem.propTypes = {
  item: PropTypes.string.isRequired,
};

export default CartItem;
