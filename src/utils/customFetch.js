import axios from "axios";
import Cookies from "js-cookie";

const apiUrl = import.meta.env.VITE_API_BACKEND_URL;

const customFetch = axios.create({
  baseURL: apiUrl,
});

customFetch.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default customFetch;
