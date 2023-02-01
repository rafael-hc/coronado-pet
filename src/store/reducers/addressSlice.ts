import { Address } from '@prisma/client'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: Address[] = []

export const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    fetchAddress: (state, { payload }: PayloadAction<Address[]>) => {
      return payload
    },
  },
})

export const { fetchAddress } = addressSlice.actions
