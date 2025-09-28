import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;

// Leaderboard API calls
export const leaderboardAPI = {
  getWeekly: () => api.get("/leaderboard/weekly"),
  getMonthly: () => api.get("/leaderboard/monthly"),
};

// Challenges API calls
export const challengesAPI = {
  getActive: () => api.get("/challenges/active"),
  getById: (id) => api.get(`/challenges/${id}`),
  participate: (id) => api.post(`/challenges/${id}/participate`),
};
