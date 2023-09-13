import { Sneaker, SneakersSliceState, Status } from './types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSneakers = createAsyncThunk<Sneaker[]>('sneakers/fetch', async () => {
  const { data } = await axios.get('https://6440f3bffadc69b8e076a276.mockapi.io/items');
  return data;
})

const initialState: SneakersSliceState = {
  sneakersItem: [],
  status: Status.LOADING
}

export const sneakersSlice = createSlice({
  name: 'sneakers',
  initialState,
  reducers: {
    setItem(state, action:PayloadAction<Sneaker[]>) {
      state.sneakersItem = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSneakers.pending, (state) => {
      state.status = Status.LOADING;
      state.sneakersItem = []
    })
    builder.addCase(fetchSneakers.fulfilled, (state, action:PayloadAction<Sneaker[]>) => {
      state.status = Status.SUCCESS
      state.sneakersItem = action.payload;
    })
    builder.addCase(fetchSneakers.rejected, (state) => {
      state.status = Status.ERROR
      state.sneakersItem = []
    })
  },
})

export default sneakersSlice.reducer