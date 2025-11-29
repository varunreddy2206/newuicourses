import { API, API_ENDPOINTS } from "@/core/url";

export const signupApi = async ({ firstName, lastName, email, phoneCode, phoneNumber, password }) => {
  try {
    const res = await API.post(API_ENDPOINTS.AUTH.SIGNUP, { 
      firstName, 
      lastName, 
      email, 
      phoneCode, 
      mobile: phoneNumber, 
      password 
    });
    console.log("res", res.data);
    return {
      status: true,
      data: res?.data,
    };
  } catch (error) {
    console.log("error", error);
    return {
      status: false,
      error: error?.response?.data?.message || "Signup failed. Please try again.",
    };
  }
};

