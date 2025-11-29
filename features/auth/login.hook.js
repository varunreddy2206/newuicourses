import { useState } from "react";
import { loginApi } from "./login.service";
import { useAuthStore } from "@/store/auth.store";
import { successfully, errorMsgApi } from "@/core/toast";
import { useRouter } from "next/navigation";

export const useLoginHook = () => {
  const router = useRouter();
  const { setAuth } = useAuthStore();

  const [formData, setForm] = useState({
    email: "",
    passoword: "",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validation = () => {
    let hasError = false;
    
    if (!email) {
      setEmailError("email is required!");
      hasError = true;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("password is required!");
      hasError = true;
    } else {
      setPasswordError("");
    }
    
    return hasError;
  };

  const handleLogin = async () => {
    // Clear previous errors
    setEmailError("");
    setPasswordError("");
    setApiError("");

    // Validation input
    if (validation()) {
      return;
    }

    // API call
    setLoading(true);
    try {
      const apiData = await loginApi({ email, password });
      
      if (apiData.status) {
        // Extract token and user from response
        // Server returns: { message: "Login successful", token, user }
        const token = apiData?.data?.token;
        const user = apiData?.data?.user;

        if (token && user) {
          // Store in Zustand store (which also persists to localStorage)
          setAuth(token, user);
          
          successfully("Login successful! Redirecting...");
          
   
            router.push("/");
         
        } else {
          errorMsgApi("Invalid response from server. Please try again.");
        }
      } else {
        setApiError(apiData?.error || "Login failed. Please try again.");
        errorMsgApi(apiData?.error || "Login failed. Please try again.");
      }
    } catch (error) {
      errorMsgApi("An unexpected error occurred. Please try again.");
      setApiError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    loading,
    emailError,
    passwordError,
    apiError,
  };
};
