import React from 'react';

function CartItem() {
  return (
    <li>
      <header>
        <h3>title</h3>
        <div className="price">
          $200
          <span className="itemprice" />
        </div>
      </header>
      <div className="details">
        <div className="quantity">
          x
          {' '}
          <span>abc</span>
        </div>
        <div className="actions">
          <button type="submit">-</button>
          <button type="submit">+</button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
