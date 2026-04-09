import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:4000/api', // ✅ aquí está la clave
  baseURL: "https://taller-final-crud.onrender.com/api",
  headers: { "Content-Type": "application/json" }
});

export default api;