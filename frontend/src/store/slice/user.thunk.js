import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../components/utilities/axiosInstance";
import toast from "react-hot-toast";



export const fetchUserThunk = createAsyncThunk(
  "user/fetchUser",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/user/login",
        {
          username,
          password,
        }
      );
      toast.success("Logged in successful!");
      return response.data.user;
    } catch (error) {
      console.error(error);

      return rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);

export const registerUserThunk = createAsyncThunk(
  "user/registerUser",
  async ({ name, username, email, password, confirmPassword, gender }, { rejectWithValue }) => {
    try {

      if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return rejectWithValue("Passwords do not match");
      }

      const response = await axiosInstance.post("/user/register", {
        name,
        username,
        email,
        password,
        confirmPassword,
        gender,
      });

      toast.success(response.data.message);

      return response.data.newUser;

    } catch (error) {

      toast.error(error.response?.data?.message || "Registration failed");

      return rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);