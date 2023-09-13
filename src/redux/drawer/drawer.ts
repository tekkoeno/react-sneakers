import { DrawerItem, DrawerItemSlice } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getDrawerFromLS } from '../../utils/getDrawerFromLS';
import { calculateTotalPrice } from '../../utils/calculateTotalPrice';

const initialState: DrawerItemSlice = getDrawerFromLS();

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItems = state.items.find(obj => obj.id === action.payload.id);
      if ( findItems ) {
        findItems.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1
        });
      }
      state.totalPrice = calculateTotalPrice(state.items);
    },
    removeItem(state, action:PayloadAction<string>) {
      state.items = state.items.filter(obj => obj.id !== action.payload);
      state.totalPrice = calculateTotalPrice(state.items);
    },
    clearItem(state) {
      state.items = []
      state.totalPrice = 0;
    },
    clickOrder(state, action) {
      state.orderItems.push({
        ...action.payload,
        count: 1
      })
    }
  },
})

export const { addItem, removeItem, clearItem, clickOrder } = drawerSlice.actions

export default drawerSlice.reducer