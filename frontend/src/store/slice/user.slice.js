import { createSlice } from "@reduxjs/toolkit";
import { fetchUserThunk } from "./user.thunk";
import { registerUserThunk } from "./user.thunk";
import { LogoutUserThunk } from "./user.thunk";
const initialState = {
  isauthenticated: false,
  screenloading: false,
  buttonloading: false,
  userprofile: null,
};

export const userslice = createSlice({
  name: "user",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchUserThunk.pending, (state) => {
        console.log("fetching user pending...");
        state.buttonloading = true;
      })

      .addCase(fetchUserThunk.fulfilled, (state, action) => {
        console.log("fetching user fulfilled...");
        state.buttonloading = false;
        state.isauthenticated = true;
        state.userprofile = action.payload;
      })

      .addCase(fetchUserThunk.rejected, (state) => {
        console.log("fetching user rejected...");
        state.buttonloading = false;
        state.isauthenticated = false;
      });


      // Register User Thunk
      builder

      .addCase(registerUserThunk.pending, (state) => {
        console.log("registering user pending...");
        state.buttonloading = true;
      })

      .addCase(registerUserThunk.fulfilled, (state, action) => {
        console.log("registering user fulfilled...");
        state.buttonloading = false;
        state.isauthenticated = true;
        state.userprofile = action.payload;
      })

      .addCase(registerUserThunk.rejected, (state) => {
        console.log("registering user rejected...");
        state.buttonloading = false;
        state.isauthenticated = false;
      });

      
      // Logout User Thunk
      builder

      .addCase(LogoutUserThunk.pending, (state) => {
        
        state.buttonloading = true;
      })

      .addCase(LogoutUserThunk.fulfilled, (state, action) => {
        console.log("logging out user fulfilled...");
        state.buttonloading = false;
        state.isauthenticated = false;
        state.userprofile = null;
      })

      .addCase(LogoutUserThunk.rejected, (state) => {
        console.log("logging out user rejected...");
        state.buttonloading = false;
        state.isauthenticated = false;
      });
  },
});

export default userslice.reducer;