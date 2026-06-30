
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_DB_URI;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
