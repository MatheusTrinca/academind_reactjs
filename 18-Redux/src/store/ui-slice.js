import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCartShow: false,
};

const uiSlice = createSlice({
  name: 'uiSlice',
  initialState,
  reducers: {
    showCart(state) {
      state.isCartShow = !state.isCartShow;
    },
  },
});

export const uiSliceActions = uiSlice.actions;

export default uiSlice.reducer;
