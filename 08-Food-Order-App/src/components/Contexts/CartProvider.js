import React, { useReducer } from 'react';
import CartContext from './CartContext';
import CartReducer from './CartReducer';
import { ADD_ITEM, REMOVE } from './types';

const CartProvider = ({ children }) => {
  const initialState = {
    items: [],
    totalAmount: 0,
  };

  const [cartState, dispatch] = useReducer(CartReducer, initialState);

  const addItemToCartHandler = item => {
    dispatch({ type: ADD_ITEM, payload: item });
  };

  const removeItemFromCartHandler = id => {
    dispatch({ type: REMOVE, payload: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
