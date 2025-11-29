import axios from "axios";
import { errorMsgApi } from "./toast";

export const API = axios.create({
  baseURL: "http://localhost:8888",
});

export const imageUrl = "http://localhost:8888";

// API Endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    SIGNUP: "/auth/signup",
    PROFILE: "/auth/profile",
    UPLOAD_PROFILE_IMAGE: "/auth/upload-profile-image",
  },
};

const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token") || null;
  }
  return null;
};

API.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token && !config.url?.includes("/login") && !config.url?.includes("/signup")) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Don't override Content-Type if it's already set (e.g., for multipart/form-data)
    if (!config.headers["Content-Type"]) {
      config.headers["Content-Type"] = "application/json";
    }

    return config; // Return the modified config object
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const errorMessage = error?.response?.data?.message;
    console.log("API call failed:", errorMessage);

    errorMsgApi(errorMessage);

    return Promise.reject(error);
  }
);
