import { configureStore } from '@reduxjs/toolkit'
import drawer from './drawer/drawer'
import sneakers from './sneakers/sneakers'

export const store = configureStore({
  reducer: {
    drawer,
    sneakers
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch