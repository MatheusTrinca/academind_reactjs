import { useState } from 'react';

const useInput = (validate = value => value.trim() !== '') => {
  const [value, setValue] = useState('');

  const isValid = validate(value);

  const changeValueHandler = e => {
    setValue(e.target.value);
  };

  const resetValue = () => {
    setValue('');
  };

  return {
    value,
    isValid,
    changeValueHandler,
    resetValue,
  };
};

export default useInput;
