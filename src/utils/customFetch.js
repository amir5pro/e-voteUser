import axios from "axios";
const customFetch = axios.create({
  baseURL: import.meta.env.VITE_API_BACKEND_URL,
});

export default customFetch;
