import React, { useContext } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../Contexts/CartContext';

const HeaderCartButton = ({ onClick }) => {
  const { items } = useContext(CartContext);

  const itemsQty = items.reduce((total, item) => {
    return total + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{itemsQty}</span>
    </button>
  );
};

export default HeaderCartButton;
