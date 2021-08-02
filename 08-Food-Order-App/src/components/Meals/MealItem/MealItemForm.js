import React, { useRef, useState } from 'react';
import Input from './Input';
import classes from './MealItemForm.module.css';

const MealItemForm = ({ id, addToCart }) => {
  const inputAmountRef = useRef();

  const [isFormValid, setIsFormValid] = useState(true);

  const submitFormHandler = e => {
    e.preventDefault();
    const enteredAmount = inputAmountRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsFormValid(false);
      return;
    }
    addToCart(enteredAmountNumber);
  };

  return (
    <form onSubmit={submitFormHandler} action="" className={classes.form}>
      <Input
        label="Amount"
        ref={inputAmountRef}
        input={{
          id: `amount_${id}`,
          type: 'number',
          min: 1,
          max: 5,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
      {!isFormValid && <p>Please enter a valid number (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
