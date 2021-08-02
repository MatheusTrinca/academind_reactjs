import React, { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../Contexts/CartContext';

const MealItem = ({ id, name, description, price }) => {
  const { addItem } = useContext(CartContext);

  const addToCartHandler = amount => {
    addItem({ id, name, description, price, amount });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>$ {price.toFixed(2)}</div>
      </div>
      <MealItemForm addToCart={addToCartHandler} id={id} />
    </li>
  );
};

export default MealItem;
