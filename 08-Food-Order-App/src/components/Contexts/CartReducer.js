import { ADD_ITEM, REMOVE } from './types';

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        items: [...state.items, action.payload],
        totalAmount:
          state.totalAmount + action.payload.price * action.payload.amount,
      };
    case REMOVE:
      return {};

    default:
      return state;
  }
};

export default CartReducer;
