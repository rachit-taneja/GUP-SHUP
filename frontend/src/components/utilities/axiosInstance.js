
import axios from "axios"; 

const API_BASE_URL = import.meta.env.VITE_DB_URI;
const axiosInstance = axios.create({
  baseURL : API_BASE_URL,
  headers: {
    withCredentials: true,
    ContentType: "application/json",
    timeout : 1000,
  }, 
  // .. other options
});

export default axiosInstance;
