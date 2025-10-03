import axios, { type AxiosInstance, AxiosError, type AxiosResponse } from "axios";

// get env once (outside axios.create)
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000/api";

const getToken = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("authToken");
  }
  return null;
};

const setToken = (token: string): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem("authToken", token);
  }
};

const removeToken = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("authToken");
  }
};

const createAxiosClient = (): AxiosInstance => {
  const axiosClient = axios.create({
    baseURL: BACKEND_URL, // ✅ moved const outside
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  axiosClient.interceptors.request.use(
    (config) => {
      // Don't add auth header for login and registration endpoints
      const publicEndpoints = ['/login', '/userRegistration', '/register'];
      const isPublicEndpoint = publicEndpoints.some(endpoint => 
        config.url?.includes(endpoint)
      );
      
      if (!isPublicEndpoint) {
        const token = getToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosClient.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        removeToken();
        window.location.href = "/login";
      }
      return Promise.reject(error);
    }
  );

  return axiosClient;
};

export { getToken, setToken, removeToken };
export default createAxiosClient;
