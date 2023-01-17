import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./model.css";

function TotalPrice() {
  const Amount = useSelector((state) => state.cart.items);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    Amount.forEach((itm) => {
      items += itm.quantity;
      price += itm.quantity * itm.price;
    });
    setTotalPrice(price);
    setTotalItems(items);
  }, [Amount, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div className="amount">
      <div className="total">
        <div className="payment">PAYMENT DETAILS</div>
        <div className="mrp">
          MRP Total: Rs
          {totalPrice}
        </div>
        <div className="shipping"> Shipping Charges: Rs0.00</div>
        Total Amount* :
        {totalPrice}
      </div>
      <button type="submit" className="proceed">
        PROCEED
      </button>
    </div>
  );
}

export default TotalPrice;
