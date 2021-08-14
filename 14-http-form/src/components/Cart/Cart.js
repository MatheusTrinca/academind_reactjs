import { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';
import useHttp from '../hooks/useHttp';

const Cart = props => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const { sendRequest, isLoading, error } = useHttp();

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = item => {
    cartCtx.addItem(item);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const confirmSubmitHandler = userData => {
    sendRequest(
      {
        url: 'https://academind-react-c9abc-default-rtdb.firebaseio.com/orders.json',
        method: 'POST',
        body: {
          user: userData,
          items: cartCtx.items,
          totalAmount: cartCtx.totalAmount,
        },
      },
      () => {
        setDidSubmit(true);
        cartCtx.clearCart();
      }
    );
  };

  if (isLoading && didSubmit) {
    return <Modal onClose={props.onClose}>Processing order...</Modal>;
  }

  if (error) {
    return (
      <Modal onClose={props.onClose}>There was an error processing order</Modal>
    );
  }

  if (didSubmit) {
    return <Modal onClose={props.onClose}>Ordered with success!!</Modal>;
  }

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout ? (
        <Checkout onConfirm={confirmSubmitHandler} onCancel={props.onClose} />
      ) : (
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>
            Close
          </button>
          {hasItems && (
            <button onClick={orderHandler} className={classes.button}>
              Order
            </button>
          )}
        </div>
      )}
    </Modal>
  );
};

export default Cart;
