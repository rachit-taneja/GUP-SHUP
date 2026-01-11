import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const userslice = createSlice({
  
    name: 'user',
})
reducer: (state = initialState, action) => {
    switch (action.type) {
      default:
        return state
    }
    }
export const {  } = userslice.actions

export default userslice.reducer