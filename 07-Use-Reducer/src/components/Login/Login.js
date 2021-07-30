import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/AuthContext';

const emailReducer = (state, action) => {
  switch (action.type) {
    case 'USER_INPUT':
      return { value: action.payload, isValid: action.payload.includes('@') };
    case 'INPUT_BLUR':
      return { value: state.value, isValid: state.value.includes('@') };
    default:
      return state;
  }
};

const passwordReducer = (state, action) => {
  switch (action.type) {
    case 'USER_INPUT':
      return {
        value: action.payload,
        isValid: action.payload.trim().length > 6,
      };
    case 'INPUT_BLUR':
      return { value: state.value, isValid: state.value.trim().length > 6 };

    default:
      return state;
  }
};

const Login = () => {
  const { onLogin } = useContext(AuthContext);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  const { isValid: emailValid } = emailState;
  const { isValid: passwordValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(emailValid && passwordValid);
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailValid, passwordValid]);

  const emailChangeHandler = event => {
    dispatchEmail({ type: 'USER_INPUT', payload: event.target.value });

    setFormIsValid(event.target.value.includes('@') && passwordState.isValid);
  };

  const passwordChangeHandler = event => {
    dispatchPassword({ type: 'USER_INPUT', payload: event.target.value });

    setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = event => {
    event.preventDefault();
    onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          //! Criar um componente Input reusavel
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
