import { useState } from "react";
import { signupApi } from "./signup.service";
import { successfully, errorMsgApi } from "@/core/toast";
import { useRouter } from "next/navigation";

export const useSignupHook = () => {
  const router = useRouter();
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneCode, setPhoneCode] = useState("IND");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Phone validation regex (numbers only, 10 digits)
  const phoneRegex = /^[0-9]{10}$/;

  const clearErrors = () => {
    setFirstNameError("");
    setLastNameError("");
    setEmailError("");
    setPhoneNumberError("");
    setPasswordError("");
  };

  const validation = () => {
    let hasError = false;
    clearErrors();

    // First Name validation
    if (!firstName.trim()) {
      setFirstNameError("First name is required!");
      hasError = true;
    } else if (firstName.trim().length < 2) {
      setFirstNameError("First name must be at least 2 characters!");
      hasError = true;
    } else if (firstName.trim().length > 50) {
      setFirstNameError("First name must not exceed 50 characters!");
      hasError = true;
    } else if (!/^[a-zA-Z\s]+$/.test(firstName.trim())) {
      setFirstNameError("First name should contain only letters!");
      hasError = true;
    }

    // Last Name validation
    if (!lastName.trim()) {
      setLastNameError("Last name is required!");
      hasError = true;
    } else if (lastName.trim().length < 2) {
      setLastNameError("Last name must be at least 2 characters!");
      hasError = true;
    } else if (lastName.trim().length > 50) {
      setLastNameError("Last name must not exceed 50 characters!");
      hasError = true;
    } else if (!/^[a-zA-Z\s]+$/.test(lastName.trim())) {
      setLastNameError("Last name should contain only letters!");
      hasError = true;
    }

    // Email validation
    if (!email.trim()) {
      setEmailError("Email is required!");
      hasError = true;
    } else if (!emailRegex.test(email.trim())) {
      setEmailError("Please enter a valid email address!");
      hasError = true;
    } else if (email.trim().length > 100) {
      setEmailError("Email must not exceed 100 characters!");
      hasError = true;
    }

    // Phone Number validation
    if (!phoneNumber.trim()) {
      setPhoneNumberError("Phone number is required!");
      hasError = true;
    } else if (!phoneRegex.test(phoneNumber.trim())) {
      setPhoneNumberError("Phone number must be exactly 10 digits!");
      hasError = true;
    }

    // Password validation
    if (!password) {
      setPasswordError("Password is required!");
      hasError = true;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters!");
      hasError = true;
    } else if (password.length > 50) {
      setPasswordError("Password must not exceed 50 characters!");
      hasError = true;
    } else if (!/(?=.*[a-z])/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter!");
      hasError = true;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter!");
      hasError = true;
    } else if (!/(?=.*[0-9])/.test(password)) {
      setPasswordError("Password must contain at least one number!");
      hasError = true;
    } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setPasswordError("Password must contain at least one special character (!@#$%^&*)!");
      hasError = true;
    }

    return hasError;
  };

  const handleSignup = async () => {
    // Clear previous errors
    clearErrors();

    // Validate inputs
    if (validation()) {
      // errorMsgApi("Please fix the validation errors before submitting.");
      return;
    }

    // API call
    setLoading(true);
    try {
      const apiData = await signupApi({ 
        firstName: firstName.trim(), 
        lastName: lastName.trim(), 
        email: email.trim(), 
        phoneCode, 
        phoneNumber: phoneNumber.trim(), 
        password 
      });
      
      if (apiData.status) {
        successfully("Account created successfully! Redirecting to login...");
        // Navigate to login screen after 1.5 seconds
        setTimeout(() => {
          router.push("/login");
        }, 1500);
      } else {
        errorMsgApi(apiData?.error || "Signup failed. Please try again.");
      }
    } catch (error) {
      errorMsgApi("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phoneCode,
    setPhoneCode,
    phoneNumber,
    setPhoneNumber,
    password,
    setPassword,
    handleSignup,
    loading,
    firstNameError,
    lastNameError,
    emailError,
    phoneNumberError,
    passwordError,
  };
};

