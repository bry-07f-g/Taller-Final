import axios from "axios";

const api = axios.create({
  baseURL: "https://taller-final-crud.onrender.com/api",
  headers: { "Content-Type": "application/json" }
});

export default api;