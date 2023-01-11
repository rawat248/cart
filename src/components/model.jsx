import React from 'react';
// import CartItem from './CartItem';
import './model.css';

const model = () => (
  <div className="cart">
    <h2>Your Shopping cart</h2>
    <ul>
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
    </ul>
  </div>
);

export default model;
