import React, { useContext, useEffect, useState } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../Contexts/CartContext';

const HeaderCartButton = ({ onClick }) => {
  const { items } = useContext(CartContext);

  const [animate, setAnimate] = useState(false);

  const itemsQty = items.reduce((total, item) => {
    return total + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setAnimate(true);

    const timer = setTimeout(() => {
      setAnimate(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items, setAnimate]);
  return (
    <button
      className={`${classes.button} ${animate && classes.bump}`}
      onClick={onClick}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{itemsQty}</span>
    </button>
  );
};

export default HeaderCartButton;
