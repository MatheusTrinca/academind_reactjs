import React, { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const Checkout = ({ onCancel }) => {
  const [inputValidity, setInputValdity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const isEmpty = value => value.trim() !== '';
  const isPostal = value => value.trim().length > 5;

  const confirmHandler = e => {
    e.preventDefault();
    const name = nameInputRef.current.value;
    const street = streetInputRef.current.value;
    const postal = postalInputRef.current.value;
    const city = cityInputRef.current.value;

    const nameIsValid = isEmpty(name);
    const streetIsValid = isEmpty(street);
    const postalIsValid = isPostal(postal);
    const cityIsValid = isEmpty(city);

    setInputValdity({
      name: nameIsValid,
      street: streetIsValid,
      postal: postalIsValid,
      city: cityIsValid,
    });

    const formIsValid =
      nameIsValid && streetIsValid && postalIsValid && cityIsValid;

    if (formIsValid) {
      console.log(name, street, postal, city);
    }
  };

  return (
    <form onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          !inputValidity.name && classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" />
        {!inputValidity.name && <p>Please enter a name</p>}
      </div>
      <div
        className={`${classes.control} ${
          !inputValidity.street && classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input ref={streetInputRef} type="text" id="street" />
        {!inputValidity.street && <p>Please enter a street</p>}
      </div>
      <div
        className={`${classes.control} ${
          !inputValidity.postal && classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalInputRef} type="text" id="postal" />
        {!inputValidity.postal && <p>Please enter a valid postal code</p>}
      </div>
      <div
        className={`${classes.control} ${
          !inputValidity.city && classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} type="text" id="city" />
        {!inputValidity.city && <p>Please enter a city</p>}
      </div>
      <div className={classes.actions}>
        <button onClick={onCancel}>Close</button>
        <button type="submit">Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
