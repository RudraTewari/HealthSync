// src/authentication/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/auth",
  withCredentials: true, // ✅ send cookies automatically
  headers: {
    "Content-Type": "application/json",
  },
});

// Auth API
export const registerUser = (data) => api.post("/register", data);
export const loginUser = (data) => api.post("/login", data);
export const verifyEmail = (data) => api.post("/verify-email", data);
export const resendOtp = (data) => api.post("/resend-otp", data);
export const sendResetOtp = (data) => api.post("/send-reset-otp", data);
export const resetPassword = (data) => api.post("/reset-password", data);
export const getLoggedInUser = () => api.get("/me"); // ✅ now correct

export default api;
