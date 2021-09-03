import { createStore } from 'redux';

const initialState = {
  counter: 0,
  toggleCounter: true,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1,
      };
    case 'INCREASE':
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case 'TOGGLE':
      return {
        ...state,
        toggleCounter: !state.toggleCounter,
      };

    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
