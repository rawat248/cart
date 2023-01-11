import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './Cart.css';
import { useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';

function Cart() {
  const dispatch = useDispatch();
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
          <span className="badge" />
        </div>
      </button>
    </div>
  );
}

export default Cart;
