import { useState } from 'react';

const useInput = validate => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validate(value);
  const inputIsInvalid = !valueIsValid && isTouched;

  const changeValueHandler = value => {
    setValue(value);
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
    isTouched,
    valueIsValid,
    inputIsInvalid,
    changeValueHandler,
    changeBlurHandler,
    reset,
  };
};

export default useInput;
