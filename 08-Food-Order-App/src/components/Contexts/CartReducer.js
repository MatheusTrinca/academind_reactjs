import { ADD_ITEM, REMOVE } from './types';

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const existingCartItemIdx = state.items.findIndex(
        item => item.id === action.payload.id
      );
      const existingItem = state.items[existingCartItemIdx];
      let updatedItems;
      if (existingItem) {
        let updatedItem = {
          ...existingItem,
          amount: existingItem.amount + action.payload.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIdx] = updatedItem;
      } else {
        updatedItems = [...state.items, action.payload];
      }
      return {
        items: updatedItems,
        totalAmount:
          state.totalAmount + action.payload.price * action.payload.amount,
      };
    case REMOVE:
      let updateditems;
      let updateditemIdx = state.items.findIndex(
        item => item.id === action.payload
      );
      let updateditem = state.items[updateditemIdx];
      if (updateditem.amount > 1) {
        updateditem.amount--;
        updateditems = [...state.items];
        updateditems[updateditemIdx] = updateditem;
      } else {
        updateditems = state.items.filter(item => item.id !== updateditem.id);
      }
      return {
        items: updateditems,
        totalAmount: state.totalAmount - updateditem.price,
      };

    default:
      return state;
  }
};

export default CartReducer;
