import { AnyAction, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { productsSlice } from './reducers/productSlice'

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, undefined, AnyAction>
