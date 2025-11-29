"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSignupHook } from "@/features/auth/signup.hook";
import { Loader2 } from "lucide-react";

export default function RegistrationForm() {
  const {
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
  } = useSignupHook();

  return (
    <div className="w-full min-h-screen bg-white flex flex-col md:flex-row ">
      
      {/* LEFT SECTION */}
      <div className="w-full md:w-1/2 flex items-center justify-center py-10 px-4">
        <div className="w-[90%] max-w-md">

          {/* Title */}
          <h1 className="text-[30px] font-semibold text-center mb-6">
            Create Your Free Account
          </h1>

          {/* Form */}
          <div className="space-y-4">
            {/* First Name and Last Name */}
            <div className="flex gap-3">
              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="First Name*"
                  className={`w-full border rounded-md px-3 py-2.5 text-sm transition ${
                    firstNameError 
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                      : "border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  } outline-none`}
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  disabled={loading}
                />
                {firstNameError && (
                  <p className="text-red-600 text-xs mt-1">{firstNameError}</p>
                )}
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="Last Name*"
                  className={`w-full border rounded-md px-3 py-2.5 text-sm transition ${
                    lastNameError 
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                      : "border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  } outline-none`}
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  disabled={loading}
                />
                {lastNameError && (
                  <p className="text-red-600 text-xs mt-1">{lastNameError}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email address*"
                className={`w-full border rounded-md px-3 py-2.5 text-sm transition ${
                  emailError 
                    ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                    : "border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                } outline-none`}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={loading}
              />
              {emailError && (
                <p className="text-red-600 text-xs mt-1">{emailError}</p>
              )}
            </div>

            {/* Phone Code and Phone Number */}
            <div className="flex gap-3">
              <div className="w-1/3">
                <select 
                  className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                  onChange={(e) => setPhoneCode(e.target.value)}
                  value={phoneCode}
                  disabled={loading}
                >
                  <option value="IND">IND</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                </select>
              </div>
              <div className="w-2/3">
                <input
                  type="text"
                  placeholder="Phone Number*"
                  maxLength={10}
                  className={`w-full border rounded-md px-3 py-2.5 text-sm transition ${
                    phoneNumberError 
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                      : "border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  } outline-none`}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    setPhoneNumber(value);
                  }}
                  value={phoneNumber}
                  disabled={loading}
                />
                {phoneNumberError && (
                  <p className="text-red-600 text-xs mt-1">{phoneNumberError}</p>
                )}
              </div>
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                placeholder="Password*"
                className={`w-full border rounded-md px-3 py-2.5 text-sm transition ${
                  passwordError 
                    ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                    : "border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                } outline-none`}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={loading}
              />
              {passwordError && (
                <p className="text-red-600 text-xs mt-1">{passwordError}</p>
              )}
            </div>

            {/* Register Button */}
            <button
              onClick={handleSignup}
              disabled={loading}
              className={`w-full bg-blue-600 text-white py-3 rounded-md text-sm font-medium transition flex items-center justify-center gap-2 ${
                loading 
                  ? "opacity-70 cursor-not-allowed" 
                  : "hover:bg-blue-700 cursor-pointer active:scale-[0.98]"
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Registering...</span>
                </>
              ) : (
                "Register Now"
              )}
            </button>

            {/* Divider Text */}
            <p className="text-center text-xs text-gray-500">other signup options</p>

            {/* Social Buttons */}
            <div className="flex items-center justify-center gap-6">
              <div className="border p-3 rounded-md shadow-sm cursor-pointer">
                <Image src="/googlelogo.png" alt="Google" width={22} height={22} />
              </div>
              <div className="border p-3 rounded-md shadow-sm cursor-pointer">
                <Image src="/facebook.png" alt="Facebook" width={22} height={22} />
              </div>
              <div className="border p-3 rounded-md shadow-sm cursor-pointer">
                <Image src="/linkdin.png" alt="LinkedIn" width={22} height={22} />
              </div>
            </div>

            {/* Terms */}
            <p className="text-xs text-center text-gray-600 leading-5">
              By registering, you agree to our{" "}
              <span className="font-semibold text-blue-500 cursor-pointer">Terms of Use</span> and{" "}
              <span className="font-semibold text-blue-500 cursor-pointer">Privacy Policy</span>.
            </p>

            {/* Login */}
            <p className="text-xs text-center text-gray-600">
              Already have an account?{" "}
              <Link href="/login">
              <span className="text-blue-600 cursor-pointer font-medium">login</span>
                </Link>
            </p>

            {/* Footer */}
            <p className="text-[10px] text-center text-gray-400 mt-2">
              © 2025 - Ascend Academy Solutions. All Rights Reserved. | Privacy Policy
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full md:w-1/2 relative h-[350px] md:h-auto">

        {/* Background Image */}
        <Image
          src="/loginpage.png"
          alt="Hero"
          fill
          className="object-cover"
        />

        {/* Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        {/* Right Side Text */}
        <div className="absolute bottom-10 left-8 text-white max-w-sm">
          <h2 className="text-2xl md:text-3xl font-bold leading-snug">
            Build Skills That Power Your Future.
          </h2>

          <p className="text-sm mt-2">
            Unlock hands-on training designed to help you grow faster.
          </p>

          <ul className="mt-4 text-sm space-y-1">
            <li>• Trusted by 5M+ global learners</li>
            <li>• Daily live classes & mentor sessions</li>
            <li>• High success rate in promotions & job transitions</li>
          </ul>
        </div>
      </div>

    </div>
  );
}
