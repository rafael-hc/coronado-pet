import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch, AppThunk } from '..'
import axios from 'axios'
import { IProduct } from '../../utils/interfaces/productInterface'

const initialState: IProduct[] = []

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProducts: (state, { payload }: PayloadAction<IProduct[]>) => {
      return payload
    },
    addProducts: (state, { payload }: PayloadAction<IProduct>) => {
      state.push(payload)
    },
    setProducts: (state, action) => {
      state.concat(state, action.payload)
    },
  },
})

export const { fetchProducts, addProducts } = productsSlice.actions

export const fetchProd = (): AppThunk => {
  return async (dispatch: AppDispatch) => {
    const response = await axios.get('http://localhost:3000/products/all')
    dispatch(fetchProducts(response.data.products))
  }
}
