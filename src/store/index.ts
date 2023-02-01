import { AnyAction, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { addressSlice } from './reducers/addressSlice'
import { cartSlice } from './reducers/cartSlice'

export const store = configureStore({
  reducer: {
    products: cartSlice.reducer,
    address: addressSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, undefined, AnyAction>
