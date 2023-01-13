import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./model.css";

function Model() {
  const cartInfo = useSelector((state) => state.cart.items);

  return (
    <div className="cartone">
      <h1 className="carthead">Your Shopping cart</h1>
      <ul>
        {cartInfo.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default Model;
