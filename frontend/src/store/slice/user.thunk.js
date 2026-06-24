import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../components/utilities/axiosInstance";

export const fetchUserThunk = createAsyncThunk(
    'user/fetchUser',
    async (username, password) , (rejectWithValue)=> {
        try {
            const response = await axiosInstance.post('/user/login', {
                username,
                password
            });
            return response.data;
            
        } catch (error) {
            console.error('Error fetching user:', error);
            return rejectWithValue(error.response.data);
        }   }
);