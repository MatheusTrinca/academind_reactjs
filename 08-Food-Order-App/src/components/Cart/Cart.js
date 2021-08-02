import React, { useContext } from 'react';
import CartContext from '../Contexts/CartContext';
import Modal from '../Modal/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = ({ onClose }) => {
  const { items, totalAmount, addItem, removeItem } = useContext(CartContext);

  const addItemHandler = item => {
    addItem({ ...item, amount: 1 });
  };

  const removeItemHandler = id => {
    removeItem(id);
  };

  const cartItems = (
    <ul className={classes['cart-item']}>
      {items.map(item => (
        <CartItem
          key={item.id}
          onAdd={addItemHandler}
          onRemove={removeItemHandler}
          {...item}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$ {totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={onClose} className={classes['button--alt']}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
