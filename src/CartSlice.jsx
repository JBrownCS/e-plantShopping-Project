import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const {pName, pImage, pCost} = state[action.payload];
        const existingPlant = state.items.find(item => item.name == pName);
        if(existingPlant){
            existingPlant.quantity++;
        }
        else{
            state.items.push({pName, pImage, pCost, quantity: 1});
        }
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name != action.payload);
    },
    updateQuantity: (state, action) => {
        const {pName, pQuantity} = state[action.payload];
        const existingPlant = state.items.find(item => item.name == pName);
        if(existingPlant){
            existingPlant.quantity = pQuantity;
        }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
