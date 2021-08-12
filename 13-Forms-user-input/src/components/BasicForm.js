import React from 'react';
import useInput from '../hooks/useInput';
import Input from './input/Input';
import isEmail from 'validator/lib/isEmail';
import './input/Input.css';

const BasicForm = () => {
  const fnameInputController = useInput(value => value.trim() !== '');
  const lnameInputController = useInput(value => value.trim() !== '');
  const emailInputController = useInput(value => isEmail(value));

  let formIsValid = false;
  if (
    fnameInputController.valueIsValid &&
    emailInputController.valueIsValid &&
    lnameInputController.valueIsValid
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = e => {
    e.preventDefault();
    if (!formIsValid) return;
    const newUser = {
      firstName: fnameInputController.value,
      lastName: lnameInputController.value,
      email: emailInputController.value,
    };
    console.log(newUser);
    fnameInputController.reset();
    lnameInputController.reset();
    emailInputController.reset();
  };

  return (
    <form>
      <div className="control-group">
        <Input
          inputController={fnameInputController}
          label="First Name"
          id="fname"
        />
        <Input
          inputController={lnameInputController}
          label="Last Name"
          id="lname"
        />
      </div>
      <Input
        inputController={emailInputController}
        label="E-mail Address"
        id="email"
      />
      <div className="form-actions">
        <button disabled={!formIsValid} onClick={formSubmitHandler}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
