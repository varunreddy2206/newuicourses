import axios from "axios";
import { errorMsgApi } from "./toast";

export const API = axios.create({
  baseURL: "https://itraining-backend.nuhvun.com",
});

export const imageUrl = "https://itraining-backend.nuhvun.com";

// const useGetUserToken = () => {
//   return localStorage.getItem("token") || null;
// };

// API.interceptors.request.use(
//   (config) => {
//     const token = useGetUserToken();

//     if (token && !config.url?.includes("/login")) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     config.headers["Content-Type"] =
//       config.headers["Content-Type"] || "application/json";

//     return config; // Return the modified config object
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// API.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     const errorMessage = error?.response?.data?.message;
//     console.log("API call failed:", errorMessage);

//     errorMsgApi(errorMessage);

//     return Promise.reject(error);
//   }
// );
