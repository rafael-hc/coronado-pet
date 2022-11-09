import { AnyAction, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { productsSlice } from './reducers/productSlice'
import { authSlice } from './reducers/loginSlice'

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    users: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, undefined, AnyAction>
