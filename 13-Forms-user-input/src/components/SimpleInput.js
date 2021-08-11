import React, { useState } from 'react';
import isEmail from 'validator/lib/isEmail';

const SimpleInput = props => {
  const [nameInput, setNameInput] = useState({ value: '', touched: false });
  const [emailInput, setEmailInput] = useState({ value: '', touched: false });

  const nameIsValid = nameInput.value.trim() !== '';
  const nameInputIsInvalid = !nameIsValid && nameInput.touched;

  const emailIsValid =
    emailInput.value.trim() !== '' && isEmail(emailInput.value);
  const emailInputIsInvalid = !emailIsValid && emailInput.touched;

  let formIsValid = false;
  if (!nameInputIsInvalid && !emailInputIsInvalid) {
    formIsValid = true;
  }

  const formSubmissionHandler = e => {
    e.preventDefault();
    setNameInput({ ...nameInput, touched: true });
    setEmailInput({ ...emailInput, touched: true });
    if (!formIsValid) {
      return;
    }
    console.log(nameInput.value, emailInput.value);
    setNameInput({ value: '', touched: false });
    setEmailInput({ value: '', touched: false });
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={`form-control ${nameInputIsInvalid && 'invalid'}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={e =>
            setNameInput({ ...nameInput, value: e.target.value, touched: true })
          }
          onBlur={() => setNameInput({ ...nameInput, touched: true })}
          value={nameInput.value}
        />
        {nameInputIsInvalid && <p className="error-text">Invalid Name</p>}
      </div>
      <div className={`form-control ${emailInputIsInvalid && 'invalid'}`}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={e =>
            setEmailInput({
              ...emailInput,
              value: e.target.value,
              touched: true,
            })
          }
          onBlur={() => setEmailInput({ ...emailInput, touched: true })}
          value={emailInput.value}
        />
        {emailInputIsInvalid && <p className="error-text">Invalid Email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
