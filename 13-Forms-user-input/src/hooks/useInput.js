import { useState } from 'react';

const useInput = validate => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validate(value);
  const inputIsInvalid = !valueIsValid && isTouched;

  const changeValueHandler = val => {
    setValue(val);
  };

  const changeBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue('');
    setIsTouched(false);
  };

  return {
    value,
    valueIsValid,
    inputIsInvalid,
    changeValueHandler,
    changeBlurHandler,
    reset,
  };
};

export default useInput;
