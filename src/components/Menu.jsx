import React from 'react';
import './Menu.css';
import PropTypes from 'prop-types';

function Menu({ items }) {
  return (
    <div className="row">
      {items.map((item) => (
        <div className="product-card-container">
          <div className="product-card">
            <img src={item.image} alt="" />
            <div className="product-card-body">
              <h1>{item.title}</h1>
              <span className="price">
                Rs.
                {item.price}
              </span>
              <p className="description">{item.description}</p>
              <button className="btn" type="submit">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
Menu.propTypes = {
  items: PropTypes.string.isRequired,
};

export default Menu;
