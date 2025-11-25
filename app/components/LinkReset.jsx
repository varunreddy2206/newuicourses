"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col md:flex-row">

      {/* LEFT SECTION */}
      <div className="w-full md:w-1/2 flex items-center justify-center py-12 px-6">
        <div className="w-[90%] max-w-md">

          {/* Title */}
          <h1 className="text-[28px] font-semibold text-center mb-2">
            Forgot your Password?
          </h1>

          {/* Subtitle */}
          <p className="text-center text-gray-600 text-sm mb-6">
            Enter your email address to receive <br />
            a password reset link
          </p>

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email Address*"
            className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm mb-4"
          />

          {/* Submit Button */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-md text-sm font-medium hover:bg-blue-700 transition">
            Register Now
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?
            <Link href="/Registrationform">
            <span className="text-blue-600 cursor-pointer font-medium"> Sign Up</span>
            </Link>
          </p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full md:w-1/2 relative h-[350px] md:h-auto">

        {/* Background Image */}
        <Image
          src="/mnt/data/c37f9fe3-d872-4b3e-b550-01ff86aaeb4c.png"
          alt="Hero"
          fill
          className="object-cover"
        />

        {/* Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Right Content */}
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
