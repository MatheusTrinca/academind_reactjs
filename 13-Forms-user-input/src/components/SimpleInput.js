import React, { useState } from 'react';

const SimpleInput = props => {
  const [enteredName, setEnteredName] = useState({ value: '', touched: false });
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;
  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const inputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const changeInputHandler = e => {
    setEnteredName(e.target.value);
  };

  const formSubmissionHandler = e => {
    e.preventDefault();
    setEnteredNameTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    setEnteredName('');
    setEnteredNameTouched(false);
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={`form-control ${nameInputIsInvalid && 'invalid'}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={changeInputHandler}
          onBlur={inputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && <p className="error-text">Invalid input</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
