import classes from './CartItem.module.css';

const CartItem = ({ id, name, amount, price, onRemove, onAdd }) => {
  const priceFixed = `$${price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{priceFixed}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={() => onRemove(id)}>−</button>
        <button onClick={() => onAdd({ id, name, amount, price })}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
