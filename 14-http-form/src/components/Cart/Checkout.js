import React from 'react';
import useInput from '../hooks/useInput';
import classes from './Checkout.module.css';

const Checkout = ({ onCancel }) => {
  const nameInput = useInput();
  const streetInput = useInput();
  const postalInput = useInput(value => value.trim().length > 5);
  const cityInput = useInput();

  const formIsValid =
    nameInput.isValid &&
    streetInput.isValid &&
    postalInput.isValid &&
    cityInput.isValid;

  const confirmHandler = e => {
    e.preventDefault();
    if (formIsValid) {
      // ENVIAR DADOS PARA CART
      console.log(nameInput.value);
      nameInput.resetValue();
      streetInput.resetValue();
      postalInput.resetValue();
      cityInput.resetValue();
    }
  };

  return (
    <form onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          !nameInput.isValid && classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={nameInput.value}
          onChange={nameInput.changeValueHandler}
        />
        {!nameInput.isValid && <p>Please enter a name</p>}
      </div>
      <div
        className={`${classes.control} ${
          !streetInput.isValid && classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={streetInput.value}
          onChange={streetInput.changeValueHandler}
        />
        {!streetInput.isValid && <p>Please enter a street</p>}
      </div>
      <div
        className={`${classes.control} ${
          !postalInput.isValid && classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          value={postalInput.value}
          onChange={postalInput.changeValueHandler}
        />
        {!postalInput.isValid && <p>Please enter a valid postal code</p>}
      </div>
      <div
        className={`${classes.control} ${
          !cityInput.isValid && classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={cityInput.value}
          onChange={cityInput.changeValueHandler}
        />
        {!cityInput.isValid && <p>Please enter a city</p>}
      </div>
      <div className={classes.actions}>
        <button onClick={onCancel}>Close</button>
        <button disabled={!formIsValid} type="submit">
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
