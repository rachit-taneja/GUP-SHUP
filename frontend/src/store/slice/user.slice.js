import { createSlice } from '@reduxjs/toolkit'
import { fetchUserThunk } from './user.thunk'

export const userslice = createSlice
(    {
  
    name: 'user',
    initialState: {isauthenticated: false},
})
// reducer: (state = initialState, action) => { 
//     switch (action.type) {
//       default:
//         return state
//     }
//     }

    extraReducers: (builder) => {
       builder.addCase(fetchUserThunk.pending, (state,action) => {
           console.log("fetching user pending...");
       });
       builder.addCase(fetchUserThunk.fulfilled, (state,action) => {
           console.log("fetching user fulfilled...");
       });
       builder.addCase(fetchUserThunk.rejected, (state,action) => {
           console.log("fetching user rejected...");
       });
    }
export const {  } = userslice.actions;

export default userslice.reducer;