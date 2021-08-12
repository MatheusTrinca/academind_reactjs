import { useReducer } from 'react';

const initialState = {
  value: '',
  isTouched: false,
};

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INPUT_VALUE':
      return {
        ...state,
        value: action.payload,
      };

    case 'INPUT_BLUR':
      return {
        ...state,
        isTouched: true,
      };
    case 'INPUT_RESET':
      return {
        value: '',
        isTouched: false,
      };

    default:
      return state;
  }
};

const useInput = validate => {
  const [state, dispatch] = useReducer(inputReducer, initialState);

  const valueIsValid = validate(state.value);
  const inputIsInvalid = !valueIsValid && state.isTouched;

  const changeValueHandler = val => {
    dispatch({ type: 'INPUT_VALUE', payload: val });
  };

  const changeBlurHandler = () => {
    dispatch({ type: 'INPUT_BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'INPUT_RESET' });
  };

  return {
    value: state.value,
    valueIsValid,
    inputIsInvalid,
    changeValueHandler,
    changeBlurHandler,
    reset,
  };
};

export default useInput;
