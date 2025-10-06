import axios from "axios";

const API_BASE = import.meta.env.REACT_APP_API_URL || "http://localhost:5000";

export const fetchPrices = () => axios.get(`${API_BASE}/api/prices`).then(r => r.data);
export const fetchPriceById = (id) => axios.get(`${API_BASE}/api/prices/${id}`).then(r => r.data);
