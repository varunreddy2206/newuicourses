"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col md:flex-row ">
      
      {/* LEFT SECTION */}
      <div className="w-full md:w-1/2 flex items-center justify-center py-12 px-6">
        <div className="w-[90%] max-w-md">

          {/* Title */}
          <h1 className="text-[26px] font-semibold text-center">Welcome back!</h1>
          <p className="text-center text-gray-600 mt-1 mb-6 text-sm">
            Log in with your email
          </p>

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email address*"
            className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm mb-4"
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password*"
            className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm"
          />

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center mt-3">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" />
              Remember Me
            </label>

            <span className="text-blue-600 text-sm cursor-pointer">
            <Link href="/forgotpassword">
              Forgot Password?
                </Link>
            </span>
          </div>

          {/* Login Button */}
          <Link href="/payment">
          <button className="w-full bg-blue-600 text-white py-3 mt-4 rounded-md text-sm font-medium hover:bg-blue-700 transition">
            Login
          </button>
            </Link>

          {/* Divider */}
          <p className="text-center text-xs text-gray-500 my-4">
            other Login options
          </p>

          {/* Social Buttons */}
          <div className="flex justify-center gap-6">
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

          {/* Signup Link */}
          
          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account?{" "}
            <span className="text-blue-600 cursor-pointer font-medium">
              <Link href="/Registrationform">
                Sign Up
                </Link>
            </span>
          </p>

          {/* Footer */}
          <p className="text-[10px] text-center text-gray-400 mt-6">
            © 2025 - Ascend Academy Solutions. All Rights Reserved. | Privacy Policy
          </p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full md:w-1/2 relative h-[350px] md:h-auto">
        
        {/* Image */}
        <Image
          src="/loginpage.png"
          alt="Hero"
          fill
          className="object-cover"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Right Text */}
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
