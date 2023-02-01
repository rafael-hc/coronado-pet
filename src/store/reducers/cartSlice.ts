import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch, AppThunk } from '..'
import { api } from '../../lib/axios'

export interface ProductsInCart {
  productId: string
  quantity: number
  name: string
  imageUrl: string
  price: number
}

const initialState: ProductsInCart[] = []

export const cartSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProducts: (state, { payload }: PayloadAction<ProductsInCart[]>) => {
      return payload
    },
    addProducts: (state, { payload }: PayloadAction<ProductsInCart>) => {
      const alreadyExistsInCart = state.findIndex(
        (product) => product.productId === payload.productId,
      )
      if (alreadyExistsInCart >= 0) {
        state[alreadyExistsInCart].quantity += payload.quantity
      }
      state.push(payload)
    },
    incrementQuantity: (state, { payload }: PayloadAction<string>) => {
      const alreadyExistsInCart = state.findIndex(
        (product) => product.productId === payload,
      )
      if (alreadyExistsInCart >= 0) {
        state[alreadyExistsInCart].quantity += 1
      }
    },
    decrementQuantity: (state, { payload }: PayloadAction<string>) => {
      const alreadyExistsInCart = state.findIndex(
        (product) => product.productId === payload,
      )
      if (alreadyExistsInCart >= 0) {
        state[alreadyExistsInCart].quantity -= 1
      }
    },
    deleteProduct: (state, { payload }: PayloadAction<string>) => {
      const alreadyExistsInCart = state.findIndex(
        (product) => product.productId === payload,
      )
      if (alreadyExistsInCart >= 0) {
        state.splice(alreadyExistsInCart, 1)
      }
    },
  },
})

export const {
  fetchProducts,
  addProducts,
  decrementQuantity,
  incrementQuantity,
  deleteProduct,
} = cartSlice.actions

export function fetchProd(): AppThunk {
  return async (dispatch: AppDispatch) => {
    const response = await api.get('/cart')
    dispatch(fetchProducts(response.data.products))
  }
}
