import React from 'react';
import isEmail from 'validator/lib/isEmail';
import useInput from '../hooks/useInput';

const SimpleInput = () => {
  const nameInput = useInput(value => value.trim() !== '');
  const emailInput = useInput(value => isEmail(value));

  let formIsValid = false;
  if (nameInput.valueIsValid && emailInput.valueIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = e => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(nameInput.value, emailInput.value);
    nameInput.reset();
    emailInput.reset();
  };

  const nameChangeHandler = e => {
    nameInput.changeValueHandler(e.target.value);
    nameInput.changeBlurHandler(true);
  };

  const emailChangeHandler = e => {
    emailInput.changeValueHandler(e.target.value);
    emailInput.changeBlurHandler(true);
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={`form-control ${nameInput.inputIsInvalid && 'invalid'}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={() => nameInput.changeBlurHandler(true)}
          value={nameInput.value}
        />
        {nameInput.inputIsInvalid && <p className="error-text">Invalid Name</p>}
      </div>
      <div className={`form-control ${emailInput.inputIsInvalid && 'invalid'}`}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={() => emailInput.changeBlurHandler(true)}
          value={emailInput.value}
        />
        {emailInput.inputIsInvalid && (
          <p className="error-text">Invalid Email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
