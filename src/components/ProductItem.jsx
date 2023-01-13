import React from "react";
import "./Menu.css";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { cartActions } from "../store/cart-slice";

function ProductItem(props) {
  const dispatch = useDispatch();

  const {
    title, price, description, id, image,
  } = props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        description,
      }),
    );
  };
  return (
    <div>
      <div className="row">
        <div className="product-card-container">
          <div className="product-card">
            <img src={image} alt="" />
            <div className="product-card-body">
              <h3>{title}</h3>
              <span className="price">
                Rs.
                {price}
              </span>
              <p className="description">{description}</p>
              <button className="btn" type="submit" onClick={addToCartHandler}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
ProductItem.propTypes = {
  title: PropTypes.string.isRequired,
};
ProductItem.propTypes = {
  price: PropTypes.string.isRequired,
};
ProductItem.propTypes = {
  description: PropTypes.string.isRequired,
};
ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
};
ProductItem.propTypes = {
  image: PropTypes.string.isRequired,
};

export default ProductItem;
