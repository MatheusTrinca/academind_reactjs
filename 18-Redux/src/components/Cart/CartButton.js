import { useSelector } from 'react-redux';
import classes from './CartButton.module.css';

const CartButton = props => {
  const { totalQuantity } = useSelector(state => state.cart);
  return (
    <button className={classes.button} {...props}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
