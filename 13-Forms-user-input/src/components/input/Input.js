import React from 'react';
import './Input.css';

const Input = ({ inputController, label, type, id }) => {
  const { value, inputIsInvalid, changeValueHandler, changeBlurHandler } =
    inputController;

  return (
    <div className={`form-control ${inputIsInvalid && 'invalid'}`}>
      <label htmlFor="name">{label}</label>
      <input
        type={type || 'text'}
        id={id || label}
        onChange={e => changeValueHandler(e.target.value)}
        onBlur={changeBlurHandler}
        value={value}
      />
      {inputIsInvalid && <p className="error-text">Invalid Name</p>}
    </div>
  );
};

export default Input;
