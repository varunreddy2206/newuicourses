import { useState } from "react";
import { loginApi } from "./login.service";

export const useLoginHook = () => {
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
    if (!email) {
      setEmailError("email is required!");
      return true;
    }

    if (!password) {
      setPasswordError("password id require");
      return true;
    }
    return false;
  };

  const handleLogin = async () => {
    //    validation input

    if (validation()) {
      return;
    }

    // api call
    setLoading(true);
    const apiData = await loginApi({ email, password });
    setLoading(false);
    if (apiData.status) {
      localStorage.setItem("token", apiData?.data?.token);
      // navigate dashboard
    } else {
      setApiError(apiData?.error);
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
  };
};
