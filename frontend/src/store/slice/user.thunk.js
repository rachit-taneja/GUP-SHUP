import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchUserThunk = createAsyncThunk(
    'user/fetchUser',
    async () => {console.log("fetching user...")}
);