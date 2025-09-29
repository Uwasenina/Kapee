// API Configuration
// This file centralizes all API-related configuration

// Backend URL configuration
export const API_CONFIG = {
  // Base URL for the backend API
  // Can be overridden by VITE_BACKEND_URL environment variable
  BASE_URL: import.meta.env.VITE_BACKEND_URL || "http://localhost:3000/api",
  
  // API endpoints
  ENDPOINTS: {
    // Authentication
    LOGIN: "/login",
    REGISTER: "/userRegistration",
    PROFILE: "/profile",
    
    // Products
    PRODUCTS: "/products",
    PRODUCT_BY_ID: (id: string) => `/products/${id}`,
    
    // Users
    USERS: "/users",
    
    // Cart
    CART: "/cart",
    CART_ITEM: (productId: string) => `/cart/${productId}`,
    
    // Orders
    ORDERS: "/orders",
    ORDER_BY_ID: (id: string) => `/orders/${id}`,
  },
  
  // Request timeout in milliseconds
  TIMEOUT: 10000,
  
  // Default headers
  DEFAULT_HEADERS: {
    "Content-Type": "application/json",
  },
} as const;

// Environment configuration
export const ENV_CONFIG = {
  NODE_ENV: import.meta.env.VITE_NODE_ENV || "development",
  IS_DEVELOPMENT: import.meta.env.VITE_NODE_ENV === "development",
  IS_PRODUCTION: import.meta.env.VITE_NODE_ENV === "production",
} as const;

// Helper function to get full API URL
export const getApiUrl = (endpoint: string): string => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

// Helper function to check if we're in development mode
export const isDevelopment = (): boolean => {
  return ENV_CONFIG.IS_DEVELOPMENT;
};
