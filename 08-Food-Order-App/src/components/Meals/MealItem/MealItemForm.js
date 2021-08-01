import React from 'react';
import Input from './Input';
import classes from './MealItemForm.module.css';

const MealItemForm = ({ id }) => {
  return (
    <form action="" className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: `amount_${id}`,
          type: 'number',
          min: 1,
          max: 5,
          defaultValue: 1,
        }}
      />
      <button>+Add</button>
    </form>
  );
};

export default MealItemForm;
