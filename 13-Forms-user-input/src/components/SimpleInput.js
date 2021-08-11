import React, { useState } from 'react';

const SimpleInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isInputTouched, setIsInputTouched] = useState(false);

  const nameInputIsValid = enteredValue.trim() !== '';
  const nameInputIsInvalid = !nameInputIsValid && isInputTouched;

  console.log('nameInputIsValid', nameInputIsValid);
  console.log('nameInputIsInvalid', nameInputIsInvalid);

  const inputBlurHandler = () => {
    setIsInputTouched(true);
  };

  const changeInputHandler = e => {
    setEnteredValue(e.target.value);
  };

  const formSubmissionHandler = e => {
    e.preventDefault();
    setIsInputTouched(true);
    if (!nameInputIsValid) {
      return;
    }
    console.log(enteredValue);
    setEnteredValue('');
    setIsInputTouched(false);
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
          value={enteredValue}
        />
        {nameInputIsInvalid && <p className="error-text">Invalid input</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
