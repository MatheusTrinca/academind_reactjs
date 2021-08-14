import React, { useState } from 'react';
import useInput from '../hooks/useInput';
import classes from './Checkout.module.css';

const Checkout = ({ onCancel, onConfirm }) => {
  const nameInput = useInput();
  const streetInput = useInput();
  const postalInput = useInput(value => value.trim().length > 5);
  const cityInput = useInput();
  const [inputValidate, setInputValidate] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const formIsValid =
    nameInput.isValid &&
    streetInput.isValid &&
    postalInput.isValid &&
    cityInput.isValid;

  const confirmHandler = e => {
    e.preventDefault();

    setInputValidate({
      name: nameInput.isValid,
      street: streetInput.isValid,
      postal: postalInput.isValid,
      city: cityInput.isValid,
    });

    if (formIsValid) {
      onConfirm({
        name: nameInput.value,
        street: streetInput.value,
        postal: postalInput.value,
        city: cityInput.value,
      });
    }
  };

  return (
    <form onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          !inputValidate.name && classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={nameInput.value}
          onChange={nameInput.changeValueHandler}
        />
        {!inputValidate.name && <p>Please enter a name</p>}
      </div>
      <div
        className={`${classes.control} ${
          !inputValidate.street && classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={streetInput.value}
          onChange={streetInput.changeValueHandler}
        />
        {!inputValidate.street && <p>Please enter a street</p>}
      </div>
      <div
        className={`${classes.control} ${
          !inputValidate.postal && classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          value={postalInput.value}
          onChange={postalInput.changeValueHandler}
        />
        {!inputValidate.postal && <p>Please enter a valid postal code</p>}
      </div>
      <div
        className={`${classes.control} ${
          !inputValidate.city && classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={cityInput.value}
          onChange={cityInput.changeValueHandler}
        />
        {!inputValidate.city && <p>Please enter a city</p>}
      </div>
      <div className={classes.actions}>
        <button onClick={onCancel}>Close</button>
        <button type="submit">Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
