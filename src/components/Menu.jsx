import React from "react";
import PropTypes from "prop-types";
import ProductItem from "./ProductItem";
import "./Menu.css";

function Menu({ items }) {
  return (
    <div className="section">
      {items.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          image={product.image}
        />
      ))}
    </div>
  );
}
Menu.propTypes = {
  items: PropTypes.string.isRequired,
};

export default Menu;
