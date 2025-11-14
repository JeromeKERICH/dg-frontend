import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000/api";

const api = axios.create({ baseURL: API_BASE });

export default api;

// Public product endpoints
export const fetchProducts = () => api.get("/products").then(r => r.data);
export const fetchProduct = (id) => api.get(`/products/${id}`).then(r => r.data);

export const fetchLatestProducts = () => api.get("/products/latest").then((r) => r.data);
  

// Register user
export const registerUser = (payload) => api.post("/users/register", payload).then(r => r.data);

// Admin auth
export const adminLogin = (payload) => api.post("/auth/login", payload).then(r => r.data);

// Admin CRUD (token required)
export const createProduct = (formData, token) => api.post("/products", formData, { headers: { Authorization: `Bearer ${token}` }});
export const updateProduct = (id, formData, token) => api.put(`/products/${id}`, formData, { headers: { Authorization: `Bearer ${token}` }});
export const deleteProduct = (id, token) => api.delete(`/products/${id}`, { headers: { Authorization: `Bearer ${token}` }});
export const fetchAllMeta = () => api.get("/products").then(r => r.data); // same endpoint returns products

// Payment verify
export const verifyPayment = (payload) => api.post("/pay/verify", payload).then(r => r.data);
