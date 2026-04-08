import api from "../api/axios";

// LOGIN
export const loginUser = (data) => api.post("/auth/login", data);

// REGISTER
export const registerUser = (data) => api.post("/auth/register", data);