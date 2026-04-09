import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  baseURL: "https://taller-final-login.onrender.com/api",
  headers: { "Content-Type": "application/json" }
});

// token interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;